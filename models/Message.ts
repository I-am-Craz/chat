import { mongoose, Schema } from '../database';

const MessageSchema = new Schema({
    room: {
        type: String,
        required : true
    },
    user: {
        type: String,
        required : true
    },
    content: {
        type: String,
        required : true
    }, 
    date: {
        type: String,
        required : true
    }
}, {collection: 'messages'});

const MessageModel = mongoose.model('Message', MessageSchema);

export = MessageModel;