const mongoose = require('mongoose');


//Contacts mongoose schema for queries
const contactSchema = new mongoose.Schema({
    boardName: String,
    boardFinish: String,
    email: String,
    boardColor: String
    
});

module.exports = mongoose.model('Contacts', contactSchema);