import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

import Messages from './Messages';
import ChatInput from './ChatInput';

import './ChatField.scss'

const ChatField = ({
    messages,
}) => {
    return (
        <Card className="chat-field-container">
            <h3>React Chat App</h3>
            <Messages messages={messages} />
            <ChatInput />
        </Card>
    );
}

export default ChatField;
