import React, { useState, useEffect, useRef } from 'react'
import requester from '../../services/requester';
import api from '../../services/api';
const UploadPicture = ({ }) => {
    const [image, setImage] = useState('');

    const [data, getImage] = useState({name: "", path: ""});
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

       /* fetch('user/uploadPicture', {
            method: 'POST',
            body: data
          }).then((response) =>
          console.log("registering" + response));*/

         requester(api.updateUser()).create(data).then(res => console.log(res));
    }

    return (
        <>
            <div
                onChange={getImage}
            >
                <input type="file" ref={el} onChange={handleChange} />                
                <button onClick={uploadImage} className="upbutton">                   
                    Upload
                </button>
            <hr />
            {data.path && <video src={data.path} autoPlay controls />}
            </div>
        </>
    )
}

export default UploadPicture;