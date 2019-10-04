import Message from "./interfaces/Message";
import User from "./interfaces/User";

class MessageClass implements Message{
    constructor(text: string, user: User) {
        this.text = text;
        this.user = user;
        this.id = Math.floor(Date.now() + Math.random() * 100);
    }
    text: string;    
    user: User;
    id: number;
}
export default MessageClass