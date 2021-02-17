
const api = {
    //userControler
<<<<<<< HEAD
    getUser: userId => `/user/${userId}`,
    addUser: () => `/user/register`,
    logginUser: () => `/user/login`,
    updateUser: () => `/user/uploadPicture`,
    getFriends: () => `/user/all`,
    getFriendsList: friendId  => `/user/friends/${friendId}`,
=======
    getUser: userId => `/users/${userId}`,
    addUser: () => `/auth/register`,
    logginUser: () => `/users/login`,
    getFriend: friendId => `/users/friend/${friendId}`,
    updateUser: () => `/user/uploadPicture`,
    getFriends: () => `/users/all`,
    getFriendsList: friendId  => `/users//friends/${friendId}`,
>>>>>>> main
    //MessagingControler
    getChat: chatId => `/messages/${chatId}`,
    sendMessage: () => `/messages/sendMessage`,
}

export default api;
