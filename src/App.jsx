import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Pages/HomePages';
import LawyerPage from './Component/lawyerPage/Lawyer';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/Auth/SignUp';
import SignIn from './Component/Auth/SignIn';
import LawyerDetails from './Component/LawyerPage/LawyerDetails'
import Footer from './Component/Footer/Footer'
import Aboutus from './Component/Pages/Aboutus'
import BookingPage from './Component/Pages/BookingPage'
import Payment from './Component/Pages/Payment'
import BookingConfirmation from './Component/Pages/BookingConfirmation'
function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Aboutus" element ={<Aboutus/>}/>
        <Route path="/lawyer" element={<LawyerPage />} />
        <Route path="/lawyerDetails" element = {<LawyerDetails/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/BookingConfirmation" element={<BookingConfirmation />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
