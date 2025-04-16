import React from 'react'
import Navbar from '../Navbar/Navbar'
import lawyer_image from '../../assets/lawyer-header.png'
const Lawyer = () => {
  return (
   
    <div>
       <Navbar/>
      <img src={lawyer_image} alt=''  className='h-'/>
    </div>
  )
}

export default Lawyer
