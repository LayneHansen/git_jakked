const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewWorkout = new Schema ({
    day:  {
        type: Date,
        default: () => new Date()
    },

    // day: new Date().setDate(new Date().getDate()-10),

    exercises: [

    { 
        type: {
            type: String,
            trim: false,
            required: true
        },
        
        name: {
            type: String,
            trim: true,
            required: true
        },
        
        weight: {
            type: Number,
            required: true,
            default: 10
        },
        
        sets: {
            type: Number,
            required: false
        },
        
        reps: {
            type: Number,
            required: true,
            default: 12
        },
        
        duration: {
            type: Number,
            required: false
        }
    }
    
    ]
})

    
    
    
  const Workout = mongoose.model("Workout", NewWorkout);

  module.exports = { Workout };