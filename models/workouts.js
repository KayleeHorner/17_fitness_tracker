const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
})

const Workouts = mongoose.model("Workouts" , workoutSchema);

module.exports = Workouts;