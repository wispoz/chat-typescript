import Message from 'Message'
interface User {
    name: string,
    id: number,
    receive( message: Message ,from: User): void,
}
export default User