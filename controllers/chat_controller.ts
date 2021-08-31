import { getAllRooms } from '../repositories/room_repository';
import { createMessage, getMessages } from '../repositories/message_repository';


module.exports.getJoinPage = async (req, resp) => {
    const rooms = await getAllRooms();
    resp.render('join.ejs', { rooms });
}

module.exports.getChatPage = async (req, resp) => {
    resp.render('chat.ejs');
}

module.exports.getAllMessages = async (req, resp) => {
    let messages = await getMessages(req.body.room);
    resp.json(messages);
}

module.exports.addMessage = async (req, resp) => {
    let r = await createMessage(req.body);
    resp.json('ok');
}