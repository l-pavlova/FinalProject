import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import io from 'socket.io-client';

import UserList from '../User/UserList';
import ChatField from './ChatField'
import { useAuth } from '../../contexts/AuthContext';
import UserDetails from '../User/UserDetails';

let socket;

const GroupChatRoom = ({

}) => {

    const { chatId } = useParams();
    const { currentUser } = useAuth();

    //const [currentUser, setCurrentUser] = useState(useAuth().currentUser);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:3001';

    useEffect(() => {
        socket = io(ENDPOINT);
        if(currentUser) {
            socket.emit('join', {currentUser, chatId: chatId }, () => {
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

export default GroupChatRoom;
