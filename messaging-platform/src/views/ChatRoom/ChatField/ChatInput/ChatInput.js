import React, { useState, useEffect } from 'react';

const ChatInput = ({
    submitHandler,
    setMessage,
    message,
    sendMessage,
}) => {

    //const [chatInput, setChatInput] = useState();

    const textChangeHandler = (event) => { setMessage(event.target.value) };

    return (
        <form className="chat-input" onSubmit={submitHandler}>
            <input type="text"
                onChange={textChangeHandler}
                value={message}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                placeholder="Write a message..."
                required />
        </form>
    );
}

export default ChatInput;
