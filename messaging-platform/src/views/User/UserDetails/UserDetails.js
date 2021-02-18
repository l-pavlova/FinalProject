import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';

import './UserDetails.scss';

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();

    useEffect(() => {
        const temp =  JSON.parse(localStorage.getItem('users')).find(x => x._id == userId);
        setUser(temp);
    }, []);
    return (
        <>
            <Container>
                <div className="profilePic">
                    <img src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"></img>profile pic here
                </div>
                <h2>Opened chat: {user && user.firstName}</h2>
                <h3>Age: {user && user.age}</h3>
            </Container>
        </>
    )
}

export default UserDetails;
