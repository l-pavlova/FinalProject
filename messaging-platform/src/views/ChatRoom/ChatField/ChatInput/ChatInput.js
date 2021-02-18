import React, { useState, useEffect } from 'react';

const ChatInput = ({
    submitHandler,
}) => {

    const [chatInput, setChatInput] = useState();

    const textChangeHandler = (event) => setChatInput(event.target.value);

    return (
        <form className="chat-input" onSubmit={submitHandler}>
            <input type="text"
                onChange={textChangeHandler}
                value={chatInput}
                placeholder="Write a message..."
                required />
        </form>
    );
}

export default ChatInput;
