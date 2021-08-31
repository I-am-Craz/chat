import Room  from '../models/Room';

export async function getAllRooms(){
    let result = await Room.find();
    return result ? result : null;
}