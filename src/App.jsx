import React from 'react'
import './App.css'
import HomePage from './Component/Pages/HomePage'
import LawyerPage from './Component/lawyerPage/Lawyer'
import Navbar from './Component/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar/>
      <HomePage/> 
    <LawyerPage/>
    </>
  )
}

export default App

