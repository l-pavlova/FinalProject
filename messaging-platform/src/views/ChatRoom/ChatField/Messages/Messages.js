import React, { useEffect } from 'react';
import Message from './Message';

const Messages = ({
    messages
}) => {

    const componentMessages = messages.map((message, i) => {
        return (
            <>
                {message.fileName
                    ? <Message
                        key={i}
                        isImg={true}
                        username={message.fileName}
                        message={message.file}
                        fromMe={message.fromMe} />
                    : <Message
                        key={i}
                        isImg={false}
                        username={message.firstName}
                        message={message.text}
                        fromMe={message.fromMe} />
                }
            </>
        );
    });

    return (
        <div className='messages' id='messageList'>
            {componentMessages}
        </div>
    );
}

export default Messages;
