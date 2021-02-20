import React from 'react';

const Messages = ({
    message,
    username,
    fromMe,
    isImg,
}) => {
    if (isImg) {
        return (
            <div className={`message ${fromMe}`}>
                <>
                    <img className='img' src={message}/>
                </>
            </div>
        )
    }
    return (
        <div className={`message ${fromMe}`}>
            { fromMe == 'me'
                ?
                <>
                    <div className='username'>
                        {username}
                    </div>
                    <div className='message-body'>
                        {message}
                    </div>
                </>
                :
                <>
                    <div className='message-body'>
                        {message}
                    </div>
                    <div className='username'>
                        {username}
                    </div>
                </>
            }
        </div>
    );
}

export default Messages;
