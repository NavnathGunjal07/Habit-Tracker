const mongoose = require('mongoose');

//creating schema for storing habbits
const HabbitSchema = new mongoose.Schema({
    habbitTitle: {
        type: String,
        required: true
    },
    habbitDescription:{
        type: String,
        required: true
    },
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    dates: [{
        date: String,
        complete: String
    }],
    streak:{
        type:Number,
    },
    longestStreak:{
        type:Number,
    },
    totalDays:{
        type:Number,
    }
},{
    timestamps: true
});

const Habbit = mongoose.model('Habbit', HabbitSchema);
module.exports = Habbit;