const Habbit = require('../models/habbits');
const User  = require('../models/user');

// controller for creating a new habbit
module.exports.create = async function(req, res){
    console.log(req.body);
  try{
    console.log("created");
    let habbit = await Habbit.create({
        habbitTitle: req.body.title,
        habbitDescription:req.body.description,
        user: req.user._id,
        totalDays:0,
        streak:0,
        longestStreak:0
    });
    
    
    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
    var today = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);
    habbit.dates.push({date:today,complete:"none"});
    habbit.save();
    return res.redirect('/');
  }catch(err){
      console.log(err);
    return res.redirect('back');
  }
  
}
// controller to update status of habbits
module.exports.statusUpdate = async function(req, res){
  var d = req.query.date;
  var id = req.query.id;
  Habbit.findById(id, (err, habbit) => {
      if (err) {
          console.log("Error updating status!")
      }
      else {
          let dates = habbit.dates;
          let found = false;
          dates.find(function (item, index) {
              if (item.date === d) {
                  if (item.complete === 'yes') {
                      item.complete = 'no';
                      habbit.totalDays-=1;
                  }
                  else if (item.complete === 'no') {
                      item.complete = 'none'
                  }
                  else if (item.complete === 'none') {
                      item.complete = 'yes'
                      habbit.totalDays+=1;
                  }
                  found = true;
              }
          })
          if (!found) {
              dates.push({ date: d, complete: 'yes' })
              habbit.totalDays+=1;
          }
          habbit.dates = dates;
           habbit.save()
              .then(habbit => {
                  console.log(habbit);
                  res.redirect('back');
              })
              .catch(err => console.log(err));
      }
  })

}

// controller for deleting the habbit
module.exports.destroy = async function(req, res){
    try{
        let habbit = await Habbit.findById(req.params.id);
    if(habbit.user==req.user.id)
    {
       
        await Habbit.deleteMany({dates: habbit, onModel: 'Habbit'});
        habbit.remove();
        return res.redirect('back');
    }
    else
    {
        return res.redirect('back');
    }
    }catch(err){
       return res.redirect('back');
    }
}