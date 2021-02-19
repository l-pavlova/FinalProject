import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';

import { groupService } from '../../services/userService';

import './UserList.scss';

const UserGroups = () => {
    const [groups, setGroups] = useState([]);

    const getGroups = async () => {
        const groups = await groupService.getGroup().then(data => data);
        localStorage.setItem('groups', JSON.stringify(groups));
    }

    useEffect(() => {
        getGroups();
        const groups = JSON.parse(localStorage.getItem('groups'));//?
        setGroups(groups);
        console.log(groups);
    }, []);

    return (
        <>
            <div className="userGroups">
                <ListGroup>
                    {groups && groups.length > 0 
                        ? groups.map(u =>
                            <ListGroup.Item action href={`/chat/${u._id}`} variant="dark" key={u._id}>
                                {u._id}
                            </ListGroup.Item>)
                        : "No Groups"
                    }
                </ListGroup>
            </div>
        </>
    )
}

export default UserGroups;