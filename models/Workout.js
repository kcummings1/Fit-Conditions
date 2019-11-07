const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
   
   _id:{
        type: Schema.Types.ObjectId
    },

    Type: {
        type: String
    },

    Name: {
        type: String,
        unique: true
    },

    Exercise: {
        type: Array 
    }
}, {
    collection: "Workout"
})

var Workout= mongoose.model("Workout", WorkoutSchema)

module.exports = Workout