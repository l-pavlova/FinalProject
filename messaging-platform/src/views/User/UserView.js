import React, {useState, useEffect} from 'react'
import UserDetails from './UserDetails'
import UserList from './UserList'

import './UserView.scss';

const UserView = () => {
    return(
        <>
        <div role="grid" class="layout">
        <UserList></UserList>
        <UserDetails></UserDetails>
        </div>
        </>
    )
}

export default UserView;