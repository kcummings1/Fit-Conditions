const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            // issue here 
            ref: "Exercise",
            // ----- 
            // reps: Number,
            // sets: Number
        }
    ]
})

var Workout= mongoose.model("Workout", workoutSchema)

module.exports = Workout