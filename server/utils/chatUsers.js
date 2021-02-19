var users = [];

const addUser = (user, roomId) => {
    name = user.firstName.toLowerCase();

    const existingUser = users.find((x) => x.roomId === roomId && x._id === user._id)

    if (existingUser) {
        return { error: 'Email is taken' };
    }

    users.push({ ...user, roomId });

    const result = { ...user, roomId }

    return { result }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user._id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    return users.find(user => user._id === id);
}

const getUsersInRoom = roomId => users.filter(user => user.roomId === roomId);

const getAllUsers = () => users;

module.exports = { addUser, removeUser, getUser, getUsersInRoom, getAllUsers }
