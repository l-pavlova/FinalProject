import React, { useState, useEffect } from 'react';
import Message from './Message';

const Messages = ({
    messages
}) => {

    /*const componentMessages = messages.map((message, i) => {
        return (
            <Message
                key={i}
                username={message.firstName}
                message={message.message}
                fromMe={message.fromMe} />
        );
    });*/

    return (
        <div className='messages' id='messageList'>
            { <></> }
        </div>
    );
}

export default Messages;
