import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface File {
  _id: string;
  originalName: string;
  path: string;
  size: number;
}

const FileList: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/files/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            {file.originalName} - {file.size} bytes
            <a href={`http://localhost:5000/${file.path}`} download>
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
