import React, { useEffect } from 'react';
import Message from './Message';

const Messages = ({
    messages
}) => {

    useEffect(() => {
        console.log(messages)
    }, [])

    const componentMessages = messages.map((message, i) => {
        return (
            <Message
                key={i}
                username={message.firstName}
                message={message.text}
                fromMe={message.fromMe} />
        );
    });

    return (
        <div className='messages' id='messageList'>
            {componentMessages}
        </div>
    );
}

export default Messages;
