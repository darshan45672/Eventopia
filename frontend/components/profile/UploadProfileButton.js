import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useS3Upload } from "next-s3-upload";

import axios from 'axios';

function UploadProfileButton({user_id,onUpdate}) {
    let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
    let [imageUrl, setImageUrl] = useState();

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async event => {
    const selectedFile = event.target.files[0];
        let { url } = await uploadToS3(selectedFile);
        setImageUrl(url);

        axios.patch(`http://localhost:3000/api/users/${user_id}`, {
            profilePath: url,
        })
        .then((response) => {
            onUpdate();
            toast.success("Updated Successfully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        })
        .catch((error) => {
            toast.error("Something Wrong", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        });
      };

  return (
    <div>
             <ToastContainer />
      <button className='btn btn-info btn-sm' onClick={handleClick}>Upload Profile Picture</button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default UploadProfileButton;