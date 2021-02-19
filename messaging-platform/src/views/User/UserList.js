import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import { useAuth } from '../../contexts/AuthContext';
import userService from '../../services/userService';
import UploadPicture from './PictureUpload/UploadPicture';
import UserGroups from './UserGroups';

import './UserList.scss';

const UserList = () => {
    const [friends, setFriends] = useState([]);
    const { currentUser } = useAuth();

    const history = useHistory();

    const getUsers = async () => {
        const users = await userService.getUsers().then(data => data);
        localStorage.setItem('users', JSON.stringify(users));
    }

    useEffect(() => {
        getUsers();
        const users = JSON.parse(localStorage.getItem('users'));
        setFriends(users);
    }, []);

    return (
        <>
            <div className="userList">
            <UploadPicture></UploadPicture>
            <h5>Contacts</h5>
                <ListGroup>
                    {friends && friends.length > 0 
                        ? friends.filter(x => currentUser._id !== x._id).map(u =>
                            <ListGroup.Item action onClick={() => history.push(`/chat/${u._id}`)} variant="dark" key={u._id}>
                                {u.firstName + u.lastName}
                            </ListGroup.Item>)
                        : "No users"
                    }
                </ListGroup>
                <h5>Groups</h5>
                <UserGroups></UserGroups>
            </div>
           
        </>
    )
}

export default UserList;
