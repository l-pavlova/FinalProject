import React, { useState, useEffect } from 'react'
import UserDetails from './UserDetails'
import UserList from './UserList'
import './UserView.scss';
import UserGroups from './UserGroups';

const UserView = ({ isPictureUpload
}) => {

    return (
        <>
            <div role="grid" className="layout">
                <UserList></UserList>
                <UserGroups></UserGroups>
                <UserDetails></UserDetails>
            </div>
        </>
    )
}

export default UserView;