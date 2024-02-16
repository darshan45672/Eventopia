import React, { useState } from 'react';
import AWS from 'aws-sdk';

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {

  const handleFileChange =  async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let selectedFile = null;
    if (e.target.files) {
      selectedFile = e.target.files[0];
    }

    if (selectedFile) {
      const s3 = new AWS.S3({
        accessKeyId: "AKIA5S6JUXZINFKXQ2N5",
        secretAccessKey: "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",
      });
      const params = {
        Bucket: "mite",
        Key: selectedFile.name,
        Body: selectedFile,
      };
      try {
        const { Location } = await s3.upload(params).promise();
        onUpload(Location);
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
  
      <input type="file" onChange={handleFileChange} />
     
  );
};

export default ImageUpload;