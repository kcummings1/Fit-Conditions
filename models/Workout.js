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
        type: [String],
        default: []
    },
    bilateral: {
        type: [String],
        default: []
    },
    unilateral: {
        type: [String],
        default: []
    }
}, {
    collection: "Workout"
})

var Workout= mongoose.model("Workout", WorkoutSchema)

module.exports = Workout