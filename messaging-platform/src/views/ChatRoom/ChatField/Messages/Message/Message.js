import React, { useState, useEffect } from 'react';

const Messages = ({
    message,
    username,
    fromMe,
}) => {
    return (
        <div className={`message ${fromMe}`}>
            <div className='username'>
                {username}
            </div>
            <div className='message-body'>
                {message}
            </div>
        </div>
    );
}

export default Messages;
