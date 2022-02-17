const mongoose = require('mongoose');

//connecting to database
mongoose.connect(`mongodb://localhost/Habbit_Tracker`);

const db  = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to MongoDB'));

db.once('open',function(){
console.log('Connected to Databse :: MongoDB');
});

module.exports = db;