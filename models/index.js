const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewExercise = new Schema ({

    exercisetype: {
      type: String,
      trim: false
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
  })

  const NewWorkout = new Schema ({
      day:  {
          type: Date,
          default: () => new Date()
      },

      exercises: [NewExercise]
  })

  const Workout = mongoose.model("Workout", NewWorkout);

  module.exports = { Workout };