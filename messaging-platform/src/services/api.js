
const api = {
    //userControler
    getUser: userId => `/users/${userId}`,
    getUserByEmail: userEmail => `/auth/email/${userEmail}`,
    addUser: () => `/auth/register`,
    logginUser: () => `/users/login`,
    getFriend: friendId => `/users/friend/${friendId}`,
    updateUser: () => `/user/uploadPicture`,
    getFriends: () => `/users/all`,
    getFriendsList: friendId  => `/users//friends/${friendId}`,
    //MessagingControler
    getGroup: (id) => `/group/${id}`,
    sendMessage: () => `/messages/sendMessage`,

    addGroup: () => `/group`,
}

export default api;
