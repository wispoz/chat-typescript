import User from './interfaces/User'
import Room from './interfaces/Room'
import Message from './interfaces/Message'
class RoomClass implements Room {
    constructor () {
        this.users = [];
    }
    sendMessage(message: Message, to?: User): void {
            if(to) {
                to.receive(message,message.user)
            }else {
                this.users.forEach(user=>{
                    user.receive(message,message.user)
                })
            }
    }
    join(user: User): void {
       const inRoom = this.users.find(userInRoom=>{
        return userInRoom.id === user.id
       });
       if(!inRoom) {
        this.users.push(user);
       }
    }

    users: User[];    
    getUsers() : User[] {
            return this.users;
    }
}
export default RoomClass