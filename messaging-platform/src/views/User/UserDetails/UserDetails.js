import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './UserDetails.scss';

import userService from '../../../services/userService';


const UserDetails = () => {
    const [user , setUser] = useState({});
    const { userId } = useParams();
   
    const getUser = async () => {
        const u = await userService.getUser("600c494514ab581768a1bc24").then(data => data);
        localStorage.setItem('users', JSON.stringify(user));
    }
    useEffect(() => {
        const temp =  JSON.parse(localStorage.getItem('users')).find(x => x._id == userId);
        console.log(temp);
        setUser(temp);
    }, []);
    return (<>
            <Container>
                <div className="profilePic">
                    <img src={user && `data:image/jpeg;base64,${user.profilePic}`}></img>profile pic here</div>
                <h2>Opened chat: {user && user.firstName}</h2>
                <h3>Age: {user && user.age}</h3>
            </Container>
        </>
    )
}

export default UserDetails;
