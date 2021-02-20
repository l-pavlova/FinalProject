import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './UserDetails.scss';

const UserDetails = () => {
    const [user , setUser] = useState({});
    const { chatId } = useParams();

    useEffect(() => {
        const temp =  JSON.parse(localStorage.getItem('users')).find(x => x._id == chatId);
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
