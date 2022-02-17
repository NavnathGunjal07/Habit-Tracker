const mongoose = require('mongoose');

var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/Habbit_Tracker';
//connecting to database
mongoose.connect(uri);

const db  = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to MongoDB'));

db.once('open',function(){
console.log('Connected to Databse :: MongoDB');
});

module.exports = db;