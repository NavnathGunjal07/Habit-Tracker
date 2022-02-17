const mongoose = require('mongoose');


// creating schema for storing user details
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    maxDays:{
        type:Number,
        default:0
    }
},{
    timestamps:true
});


const user = mongoose.model('User', userSchema);
module.exports = user;