const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
    }

});

const Exercise = mongoose.model("Exercise" , exerciseSchema);

module.exports = Exercise;