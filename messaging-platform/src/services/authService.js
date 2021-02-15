import api from './api';
import requester from './requester';

const authService = {
    register: async (userData) => await requester(api.addUser()).create(userData),
}

export default authService;