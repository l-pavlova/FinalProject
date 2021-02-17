
const api = {
    //userControler
    getUser: userId => `/user/${userId}`,
    addUser: () => `/user/register`,
    logginUser: () => `/user/login`,
    updateUser: () => `/user/uploadPicture`,
    getFriends: () => `/user/all`,
    getFriendsList: friendId  => `/user/friends/${friendId}`,
    //MessagingControler
    getChat: chatId => `/chat/${chatId}`,
    sendMessage: () => `/chat/sendMessage`,
}

export default api;
