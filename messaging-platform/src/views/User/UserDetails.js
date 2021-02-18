import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import requester from '../../services/requester';
import api from '../../services/api';

import './UserDetails.scss';
import UploadPicture from './UploadPicture.js';

function getUserDetails(id) {
    fetch(`user/${id}`, {
      }).then((response) =>
      console.log("getting" + response))
    /*
    return requester(api.getUser(id)).get()
        .then(data => {
            //console.log(data);
            return data;
        });*/
}

const UserDetails = () => {
    const [userName, setName] = useState("");
    const [userAge, setAge] = useState(0);

    useEffect(() => {
        const user = getUserDetails('600c494514ab581768a1bc24').then(u => {
            //console.log(u);
            setName(`${u.firstName} ${u.lastName}`);
            setAge(u.age);
            console.log(process.env.REACT_APP_FIREBASE_API_KEY);
        })
    }, []);
    return (
        <>
            <Container>
                <div class="profilePic">
                    <img src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"></img>profile pic here
                    <UploadPicture ></UploadPicture>
                </div>
                <h2>Opened chat: {userName}</h2>
                <h3>Age: {userAge}</h3>
            </Container>
        </>
    )
}

export default UserDetails;