import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import io from 'socket.io-client';

import UserList from '../User/UserList';
import ChatField from './ChatField'
import { useAuth } from '../../contexts/AuthContext';
import UserDetails from '../User/UserDetails';

let socket;

const ChatRoom = ({

}) => {

    const { chatId } = useParams();
    const { currentUser } = useAuth();

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const user = JSON.parse(localStorage.getItem('users')).find(x => x._id == chatId);
    const ENDPOINT = 'localhost:3001';

    useEffect(() => {
        socket = io(ENDPOINT);

        socket.emit('join', { currentUser, user: user });
        console.log(user);
    })

    /*useEffect(() => {
        socket.on('message', (message) => {
            console.log(message);
            setMessages([...messages, message])
        })
    }, [messages])*/

    return (
        <div className="chat-room">
            <UserList></UserList>
            <div className="chat-field">
                <ChatField></ChatField>
            </div>
            <UserDetails></UserDetails>
        </div>
    );
}

export default ChatRoom;
