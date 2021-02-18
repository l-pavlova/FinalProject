import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';

import userService from '../../services/userService';

import './UserList.scss';

const UserList = () => {
    const [friends, setFriends] = useState([]);

    const getUsers = async () => {
        const users = await userService.getUsers().then(data => data);
        localStorage.setItem('users', JSON.stringify(users));
    }

    useEffect(() => {
        getUsers();
        const users = JSON.parse(localStorage.getItem('users'));
        setFriends(users);
        //console.log(users);
    }, []);

    return (
        <>
            <div className="userList">
                <ListGroup>
                    {friends.length > 0 
                        ? friends.map(u =>
                            <ListGroup.Item action href={`/chat/${u._id}`} variant="dark" key={u._id}>
                                {u.firstName + u.lastName}
                            </ListGroup.Item>)
                        : "No users"
                    }
                </ListGroup>
            </div>
        </>
    )
}

export default UserList;
