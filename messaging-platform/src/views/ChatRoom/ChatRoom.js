import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import io from 'socket.io-client';

import UserList from '../User/UserList';
import ChatField from './ChatField'
import { useAuth } from '../../contexts/AuthContext';
import UserDetails from '../User/UserDetails';
import UserGroups from '../User/UserGroups';

let socket;

const ChatRoom = ({

}) => {

    const { chatId } = useParams();
    const { currentUser } = useAuth();

    //const [currentUser, setCurrentUser] = useState(useAuth().currentUser);
    const [img, setImg] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const user = JSON.parse(localStorage.getItem('users')).find(x => x._id == chatId);
    const ENDPOINT = 'localhost:3001';

    useEffect(() => {
        socket = io(ENDPOINT);
        if(currentUser) {
            socket.emit('join', { currentUser, user: user }, () => {
            });
        }

        return () => {
            socket.emit('disconnected', currentUser._id, () => setMessages([]));
            socket.off();
        }
    }, [chatId])

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ])
        })
    }, [chatId])

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, currentUser._id, () => setMessage(''));
        }
    } 

    return (
        <div className="chat-room">
            <UserList></UserList>
            <div className="chat-field">
                <ChatField
                    messages={messages}
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                    currentUser={currentUser}
                />
            </div>
            <UserDetails></UserDetails>
        </div>
    );
}

export default ChatRoom;
