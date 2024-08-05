import React from 'react'
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div>
      <h1>Menu:</h1>
      <button onClick={() => navigate('/menu/list')} >List</button>
      <button onClick={() => navigate('/menu/chat')} >Chat</button>
      <button onClick={() => navigate('/menu/items')} >Cart</button>
      <button onClick={() => navigate('/menu/student')} >Students</button>
      <button onClick={() => navigate('/menu/fileUpload')} >Upload File</button>
      <button onClick={() => navigate('/menu/fileList')} >FileList</button>
    </div>
  )
}

export default Menu;
