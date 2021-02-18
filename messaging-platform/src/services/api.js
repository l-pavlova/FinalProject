
const api = {
    //userControler
    getUser: userId => `/users/${userId}`,
    getUserByEmail: userEmail => `/users/email/${userEmail}`,
    addUser: () => `/auth/register`,
    logginUser: () => `/users/login`,
    getFriend: friendId => `/users/friend/${friendId}`,
    updateUser: () => `/user/uploadPicture`,
    getFriends: () => `/users/all`,
    getFriendsList: friendId  => `/users//friends/${friendId}`,
    //MessagingControler
    getChat: chatId => `/messages/${chatId}`,
    sendMessage: () => `/messages/sendMessage`,
}

export default api;
