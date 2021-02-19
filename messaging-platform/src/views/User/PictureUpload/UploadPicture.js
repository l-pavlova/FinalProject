import React, { useState, useEffect, useRef } from 'react'
import requester from '../../../services/requester';
import api from '../../../services/api';
import { Button, Card } from 'react-bootstrap';

const UploadPicture = ({ }) => {
    const [image, setImage] = useState('');

    const [data, getImage] = useState({ name: "", path: "" });
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
        formData.append('id', '600c494514ab581768a1bc24');//remove hardcoded
        const data = new URLSearchParams(formData);

         fetch('user/uploadPicture', {
             method: 'POST',
             body: data
           }).then((response) =>
           console.log("registering" + response));

        //requester(api.updateUser()).create(data).then(res => console.log(res));
    }

    return (
        <>
            <Card onChange={getImage}> 
            {data.path && <Card.Img variant="top" src={data.path} />}
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