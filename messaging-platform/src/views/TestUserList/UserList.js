import React, { useState, useEffect } from 'react'
import { Button, ListGroup } from 'react-bootstrap';

import requester from '../../services/requester';
import api from '../../services/api';

import './UserList.scss';

function getUsers() {
    return requester(api.getFriends()).get()
        .then(data => {
            console.log('fetching');
            console.log(data);
            return data;
        });
}

const users = getUsers();

const UserList = () => {
    const [counter, setCounter] = useState(() => { return 0; });

    const [listItems, setItems] = useState("");
    useEffect(() => {
        users.then(u => {
            console.log(u);
            const resultArray = u.map(u => <ListGroup.Item action href="opa" variant="dark" key={u._id}> {u.firstName + u.lastName}</ListGroup.Item>);
            setItems(resultArray);
      })}, []);

    if(listItems === "") {
        return <h2>No friends for you.</h2>
    }

    return (
        <>
            <Button onClick={() => setCounter(counter + 1)}>+</Button>
            <span>{counter}</span>
            <Button onClick={() => setCounter(counter - 1)}>-</Button>
            <div class="userList">
                 <ListGroup>{listItems}</ListGroup>
            </div>
        </>
    )
}

export default UserList;