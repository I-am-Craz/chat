import Message  from '../models/Message';

export async function getMessages(room){
    try{
        let result = await Message.find({
            room: room
        });
        return result ? result : null;
    } catch(e){
        console.log(e);
        throw new Error(e);
    }
}

export async function createMessage(data){
    try{
        const room = await new Message({
            room: data.room,
            user: data.user,
            content: data.content,
            date: data.date
        });
        room.save();
        return true;
    } catch(e){
        console.log(e);
        throw new Error(e);
    }
}