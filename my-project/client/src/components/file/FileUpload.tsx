import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        await axios.post('http://localhost:5000/files/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload!</button>
    </div>
  );
};

export default FileUpload;

// Ensure the file is considered a module
export {};
