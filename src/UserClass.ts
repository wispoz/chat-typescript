import User from './interfaces/User'
import Message from './interfaces/Message'
class UserClass implements User {
    receive(message: Message, from: User): void {
       console.log(`Сообщение ${this.name} от ${from.name}: ${message.text} `);
    }
    constructor(name: string) {
        this.id = Math.floor(Date.now() + Math.random() * 100);
        this.name = name;
    }
    name: string;    
    id: number;
  
}
export default UserClass