import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Pages/HomePages';
import LawyerPage from './Component/lawyerPage/Lawyer';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/Auth/SignUp';
import SignIn from './Component/Auth/SignIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lawyer" element={<LawyerPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
