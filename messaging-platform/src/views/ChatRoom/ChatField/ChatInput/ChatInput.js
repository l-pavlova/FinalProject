import React from 'react';
import {useRef, useState} from 'react';

const ChatInput = ({
    submitHandler,
    setMessage,
    message,
    sendMessage,
}) => {

    const [image, setImage] = useState('');

    const el = useRef();

    const handleChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    }

    const textChangeHandler = (event) => { setMessage(event.target.value) };
    return (
        <form className="chat-input" onSubmit={submitHandler}>
             <input type="file" ref={el} onChange={handleChange} style={{width: 'fit-content'}}/>
            <input
                className="text-field"
                type="text"
                onChange={textChangeHandler}
                value={message}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                placeholder="Write a message..."
                required
            />
        </form>
    );
}

export default ChatInput;
