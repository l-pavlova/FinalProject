const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }],
    content: {
        type: String
    }//todo:think about types of messageContents, ask OPA BOCE 
});

module.exports = mongoose.model('Message', messageSchema);