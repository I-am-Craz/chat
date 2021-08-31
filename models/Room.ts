import { mongoose, Schema } from '../database';

const RoomSchema = new Schema({
    name: {
        type: String,
        required : true
    }
}, {collection: 'rooms'});

const RoomModel = mongoose.model('Room', RoomSchema);

export = RoomModel;