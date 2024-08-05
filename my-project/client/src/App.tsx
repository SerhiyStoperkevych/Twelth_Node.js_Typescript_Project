import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import List from './components/list/List';
import Menu from './components/Menu';
import Chat from './components/chat/Chat';
import Items from './components/items/Items';
import Student from './components/student/Student';
import FileList from './components/file/FileList';
import FileUpload from './components/file/FileUpload';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/logIn" />} />
      <Route path="/logIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/menu/list" element={<List />} />
      <Route path="/menu/chat" element={<Chat />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/items" element={<Items />}/>
      <Route path="/menu/student" element={<Student />} />
      <Route path="/menu/fileUpload" element={<FileUpload />} />
      <Route path="/menu/fileList" element={<FileList />} />
    </Routes>
  );
};

export default App;
