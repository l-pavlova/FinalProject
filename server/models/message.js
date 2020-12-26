const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String
    }//todo:think about types of messageContents, ask OPA BOCE 
});

module.exports = mongoose.model('Message', messageSchema);