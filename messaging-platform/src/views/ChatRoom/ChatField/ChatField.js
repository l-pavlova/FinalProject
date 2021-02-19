import React from 'react';

import { Card } from 'react-bootstrap';

import Messages from './Messages';
import ChatInput from './ChatInput';

import './ChatField.scss'

const ChatField = ({
    messages,
    message,
    setMessage,
    sendMessage,
    currentUser,
}) => {

    return (
        <Card className="chat-field-container">
            <h3>{`${currentUser.firstName} ${currentUser.lastName}`}</h3>
            <Messages messages={messages.map(x => { return { ...x, fromMe: x.fromMe ? x.fromMe : x.from === currentUser._id ? "me" : "other" } })} />
            <ChatInput
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
            />
        </Card>
    );
}

export default ChatField;
