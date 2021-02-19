import api from './api';
import requester from './requester';

const userService = {
    getUser: userId => requester(api.getUser(userId)).get(),
    getUserByEmail: userEmail => requester(api.getUserByEmail(userEmail)).get(),
    getUsers: () => requester(api.getFriends()).get(),
}


export const groupService = {
    getGroup: chatId => requester(api.getChat(chatId)).get()
}


export default userService;