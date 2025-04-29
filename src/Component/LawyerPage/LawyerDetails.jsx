import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import pri_image from '../../assets/pri-headerimage.png'
import { Search, Calendar, MapPin } from 'lucide-react';
import { Button } from '@mui/material';
const LawyerDetails = () => {
  return (
    <div>

      <hero>
        <div className='relative  items-center m-0'>
          <img src={pri_image} alt=' ' className='w-[1440px] h-[450px] ' />
          <div className="bg-white relative z-10 rounded-2xl shadow-md mx-auto flex flex-col items-center justify-center mt-[-200px]"
            style={{ width: '1100px', height: '175px' }}>

            <div className="flex justify-center gap-10 text-lg font-semibold mb-4">
              <button className="text-black hover:text-orange-500">Advocate</button>
              <button className="text-black hover:text-orange-500">About Us</button>
              <button className="text-black hover:text-orange-500">Category</button>
            </div>


            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center border rounded-md px-3 py-2">
                <MapPin className="text-orange-500 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Delhi, India"
                  className="outline-none w-36"
                />
              </div>

              <div className="flex items-center border rounded-md px-4 py-2">
                <Search className="text-orange-500 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Crime"
                  className="outline-none"
                />
              </div>

              <div className="flex items-center border rounded-md px-4 py-2">
                <Calendar className="text-orange-500 mr-2" size={20} />
                <input
                  type="text"

                  className="outline-none w-44"
                />
              </div>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </hero>

    </div>
  )
}

export default LawyerDetails
