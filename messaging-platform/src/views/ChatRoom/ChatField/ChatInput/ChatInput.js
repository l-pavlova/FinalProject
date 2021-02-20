import React from 'react';
import { useRef, useState } from 'react';
import io from 'socket.io-client';

let socket;

const ChatInput = ({
    submitHandler,
    setMessage,
    message,
    sendMessage,
    currentUser,
}) => {

    const [image, setImage] = useState('');

    const el = useRef();

    const handleChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        readThenSendFile(file);
    }

    const ENDPOINT = 'localhost:3001';
    const readThenSendFile = (file) => {

        var reader = new FileReader();
        reader.onload = function (evt) {
            socket = io(ENDPOINT);

            var msg = {};
            msg.file = evt.target.result;
            msg.fileName = file.name;
            console.log(msg)
            socket.emit('sendMessage', msg, currentUser._id, () => console.log(0));
        };
        reader.readAsDataURL(file);
    }



    const textChangeHandler = (event) => { setMessage(event.target.value) };
    return (
        <form className="chat-input" onSubmit={submitHandler}>
            <input
                type="file" ref={el}
                onChange={handleChange}
                style={{ width: 'fit-content' }}
            />
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
