const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
})

var Exercise= mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise