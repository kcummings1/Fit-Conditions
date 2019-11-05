const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    exercises: [
        {
<<<<<<< HEAD
            typre: Schema.Types.ObjectId,
            // something wrong here
=======
            type: Schema.Types.ObjectId,
            // issue here 
>>>>>>> 4def00507db7f2f9a4cb2924df7ef90b4dc56628
            ref: "Exercise",
            // ----- 
            // reps: Number,
            // sets: Number
        }
    ]
})

var Workout= mongoose.model("Workout", workoutSchema)

module.exports = Workout