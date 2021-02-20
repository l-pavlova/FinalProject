import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

import { useAuth } from '../../contexts/AuthContext';
import AddUserGroupDialog from './AddUserGroupDialog';
import { groupService } from '../../services/userService';
import userService from '../../services/userService';

import './UserGroups.scss';

const UserGroups = ({

}) => {

    const { currentUser } = useAuth();
    const [groups, setGroups] = useState([]);
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    const history = useHistory();

    const getGroups = async () => {
        const groups = await groupService.getGroup(currentUser._id).then(data => data);
        localStorage.setItem('groups', JSON.stringify(groups));
    }

    const getUsers = async () => {
        const users = await userService.getUsers().then(data => data);
        localStorage.setItem('users', JSON.stringify(users));
    }

    useEffect(() => {
        getGroups();
        getUsers();
        const groups = JSON.parse(localStorage.getItem('groups'));//?
        const users = JSON.parse(localStorage.getItem('users'));
        setUsers(users);
        setGroups(groups);
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddGroup = (groupName, usersId) => {
        groupService.addGroup({ groupName, usersId });
        if(usersId.includes(currentUser._id)) {
            localStorage.setItem('groups', JSON.stringify(groups.push({groupName, usersId})));
        }
        handleClose();
    }

    return (
        <>
            <div className="user-groups">
                <Button className="add-user-groups-button" variant="outline-primary" onClick={handleShow}>Add Group</Button>
                {show &&
                    <AddUserGroupDialog
                        show={show}
                        handleClose={handleClose}
                        users={users}
                        handleAddGroup={handleAddGroup}
                    />
                }
                <ListGroup>
                    {groups && groups.length > 0
                        ? groups.map(u =>
                            <ListGroup.Item action key={`${u.groupName}`} onClick={() => history.push(`/chat/group/${u.groupName.trim().toLowerCase()}`)} variant="dark" key={u._id}>
                                {u.groupName}
                            </ListGroup.Item>)
                        : "No Groups"
                    }
                </ListGroup>
            </div>
        </>
    )
}

export default UserGroups;
