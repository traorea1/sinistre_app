const mongoose = require('mongoose');

// a simple model blueprint 
const ThoughtSchema = mongoose.Schema({
    thought: String,
    dateCreated: Date,
});

// the actual model used to interract with the db 

const Thought = mongoose.model('Thought', ThoughtSchema);

//exports. 
module.exports = Thought;