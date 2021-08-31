import { getAllRooms } from '../repositories/room_repository';

let users = [];

module.exports =  async function chat(io, socket,){
    let name;
    socket.on('join', function(data){
        name = data.name;
        socket.join(data.room);
        if(data.name !== null){
            users.push(data.name);
        }
        users = unique(users);
        console.log(users)
        io.to(data.room).emit('join', users);
    });
    socket.on('chat message', function(data){
        io.emit('chat message', data);
    });
}

function unique(arr) {
    return Array.from(new Set(arr));
  }