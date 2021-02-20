import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'

const AddUserGroupDialog = ({
    show,
    handleClose,
    users,
    handleAddGroup
}) => {

    const [groupName, setGroupName] = useState('');
    const [groupUsers, setGroupUsers] = useState([]);

    const textChangeHandler = (event) => { setGroupName(event.target.value) };

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Name -
                    <input
                        className="text-field"
                        type="text"
                        onChange={textChangeHandler}
                        value={groupName}
                        placeholder="Write a name..."
                        required
                    />
                    {
                        groupUsers.map(user => {
                            return (
                            <div>
                                {users.find(x => x._id === user).firstName}
                            </div>
                            )
                        })
                    }
                    <DropdownButton id="users-dropdown-button" title="Dropdown button" >
                        {users.map(user =>
                            <Dropdown.Item
                                id={`${user._id}`}
                                key={`${user._id}`}
                                onClick={e => { setGroupUsers([...new Set([...groupUsers, e.target.id])]) }}
                            >
                                {user.firstName}
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" type="submit" onClick={() => handleAddGroup(groupName, groupUsers)}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddUserGroupDialog;
