import React from 'react';
import UserInfoInquire from './controller/UserInfoInquire.js';
import UserInfoHeader from './components/UserInfoHeader.jsx';
import UserInfoContent from './components/UserInfoContent.jsx';
import './App.css'

const App = () => {
  return (
    <UserInfoInquire>
      <UserInfoHeader />
      <UserInfoContent />
    </UserInfoInquire>
  );
}

export default App;