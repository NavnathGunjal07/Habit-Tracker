
const Habbit = require('../models/habbits');
const User = require('../models/user');

//controller for rendering home page
module.exports.home = async function(req,res){
    let habbits =  await Habbit.find({user:req.user.id})
        .sort('-createdAt');
        
    let user = await User.find({user:req.user.id});
    // console.log(req.user.id);
        var days = [];
        days.push(getD(0));
        days.push(getD(1));
        days.push(getD(2));
        days.push(getD(3));
        days.push(getD(4));
        days.push(getD(5));
        days.push(getD(6));     
    
    
        // console.log(days);
    return res.render('index.ejs',{
        title: 'HabbitTracker | Home',
        habbits:habbits,
        days:days,
    });
}

//function for calculating next 7 days if a week
function getD(n) {
    let d = new Date();
    d.setDate(d.getDate() + n);
    var newDate = d.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
    var day;
    switch (d.getDay()) {
        case 0: day = 'Sun';
            break;
        case 1: day = 'Mon';
            break;
        case 2: day = 'Tue';
            break;
        case 3: day = 'Wed';
            break;
        case 4: day = 'Thu';
            break;
        case 5: day = 'Fri';
            break;
        case 6: day = 'Sat';
            break;
    }
    return { date: newDate, day };
}