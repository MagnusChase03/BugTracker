const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for bugs
const BugSchema = new Schema({
    bugName: String,
    bugDesc: String
});

// Create model for bugs
const Bugs = mongoose.model('Bugs', BugSchema);

module.exports = Bugs;
