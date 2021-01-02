export default class Message{
    constructor(senderId, receiverId, content) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.content = content;
        this.sentAt = new Date();
    }
}