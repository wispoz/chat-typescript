import UserClass from './UserClass'
import RoomClass from './RoomClass'
import MessageClass from './MessageClass';

const pavel = new UserClass('pavel');
const tanya = new UserClass('tanya');
const sasha = new UserClass('sasha');
const olya = new UserClass('olya');
const room = new RoomClass();

room.join(pavel);
room.join(tanya);
room.join(sasha);
room.join(olya);

room.sendMessage(new MessageClass("text",pavel));
room.sendMessage(new MessageClass("private message",tanya),pavel);
room.sendMessage(new MessageClass("private message to",olya),sasha);