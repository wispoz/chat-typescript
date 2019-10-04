import User from 'User'
import Message from 'Message'
interface Room {
    users: User[],

    join(user: User): void,
    getUsers(): User[],
    sendMessage(message: Message, from: User, to?: User): void
}
export default Room