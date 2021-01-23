const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
    name: {
        type: String,
        trim: true,
        required: "Name of Exercise is Required"
    },

    type: {
        type: String,
        trim: true,
        required: "Must Enter Type of Exercise"
    },

    weight: {
        type: Number,
    },
    
    sets: {
        type: Number,
    },
    
    reps: {
        type: Number,
    },
    
    duration: {
        type: Number,
        trim: true,
    },
    distance: {
    type: Number,
    trim: true,
    },
        }],
    day: {
        type: Date,
        default: () => new Date()
    }

});

const Workout = mongoose.model("Workout" , workoutSchema);

module.exports = Workout;