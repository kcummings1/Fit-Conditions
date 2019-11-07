const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
   
   _id:{
        type: Schema.Types.ObjectId
    },

    type: {
        type: String
    },

    name: {
        type: String,
        unique: true
    },

    exercise: {
        type: Array 
    }
}, {
    collection: "Workout"
})

var Workout= mongoose.model("Workout", WorkoutSchema)

module.exports = Workout