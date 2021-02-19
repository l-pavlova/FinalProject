import React, { useState, useEffect, useRef } from 'react'
import requester from '../../../services/requester';
import api from '../../../services/api';
import { Button, Card } from 'react-bootstrap';

import { useAuth } from '../../../contexts/AuthContext';

const UploadPicture = ({ }) => {
    const [image, setImage] = useState('');

    const [data, getImage] = useState({ name: "", path: "" });
    const { currentUser } = useAuth();
 
    console.log(currentUser);
    const el = useRef();

    const handleChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    }
    const uploadImage = () => {
        console.log('in');
        console.log(image);
        const formData = new FormData();
        formData.append('file', image);
        formData.append('_id', currentUser._id);
        console.log(currentUser._id);
        const data = new URLSearchParams(formData);

         fetch('users/uploadPicture', {
             method: 'POST',
             body: formData
           }).then((response) =>
           console.log("registering" + response));

        //requester(api.updateUser()).create(data).then(res => console.log(res));
    }

    return (
        <>
            <Card onChange={getImage}> 
            {image.path && <Card.Img variant="top" src={image.path} />}
                <Card.Body>
                    <Card.Title>Upload new profile pic</Card.Title>
                    <input type="file" ref={el} onChange={handleChange} style={{width: 'fit-content'}}/>
                    <Card.Text>
                       Upload a picture for people to recognize you
                     </Card.Text>
                    <Button variant="primary" onClick={uploadImage} className="upbutton">Upload!</Button>
                </Card.Body>
            </Card>
           
        </>
    )
}

export default UploadPicture;