import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import middle_image from '../../assets/middle-png.png'
// import location_image from '../../assets/location.png'
import Mask_group from '../../assets/Mask-group.png'
import text_head from '../../assets/text-head.png'
import { Search, Calendar, MapPin } from 'lucide-react';
import { Button } from '@mui/material';
const HomePage = () => {
    return (
        <>
            {/* <nav className="bg-white  h-16 top-0 w-full z-50    ">
        <div className=" mx-auto px-4 h-full flex justify-between items-center">
          <div className=" flex  items-center space-x-2">
            <img src={logo} alt="" className="h-10 w-auto" />
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-black text-xl mr-8 ">Home</a>
            <a href="#" className="text-black text-xl mr-8 ">Aboutus</a>
            <a href="#" className="text-black text-xl ">Category</a>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-black text-xl">Login</a>
            <a href="#" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold  rounded-md transition ">Register</a>
          </div>
        </div>
      </nav> */}
            <hero>
                <div className='relative w-full h-[717.9px]  items-center'>
                    <img src={Mask_group} alt=' ' className='w-full h-full object-cover' />
                    <img src={text_head} alt='' className='absolute  w-[480px]  h-[200px]flex items-center top-[30px] ml-[400px]' />
                    <div className="bg-white rounded-2xl shadow-md mx-auto  flex flex-col items-center justify-center mt-[-200px]"
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
            <section className="py-12">
                <div className="container">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold ml-[100px]">Explore Our Lawyer</h2>
                        <Button variant="outline" size="sm" >
                            <p className="rounded-xl text-white px-4 py-2  mr-[100px]" style={{ backgroundColor: '#25416F' }}>Join As Lawyer</p>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                        {[
                            { name: "Crime", icon: "🔍" },
                            { name: "Corruption", icon: "💼" },
                            { name: "Divorce", icon: "⚖️" },
                            { name: "Land", icon: "🏠" },
                            { name: "Tax", icon: "📊" },
                            { name: "Social Security", icon: "🔒" },
                            { name: "Civil Litigation", icon: "📝" },
                            { name: "Employment", icon: "👔" },
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center rounded-lg p-4 text-center hover:border-orange-500 hover:shadow-md"
                            >
                                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
                                    {category.icon}
                                </div>
                                <span className="text-sm font-medium">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={middle_image} alt="" />
                </div>

            </section>

            <footer className=" text-white py-10" style={{ backgroundColor: '#25416F' }}>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">

                    {/* Logo Section */}
                    <div>
                        <img src={logo} alt="Logo" className="w-auto h-12" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">Services</a></li>
                            <li><a href="#" className="hover:text-blue-400">Lawyer</a></li>
                            <li><a href="#" className="hover:text-blue-400">Testimonial</a></li>
                            <li><a href="#" className="hover:text-blue-400">Blog & News</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Social Media</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
                            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Product</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">Schedule Appointment</a></li>
                            <li><a href="#" className="hover:text-blue-400">New Customer Forms</a></li>
                            <li><a href="#" className="hover:text-blue-400">Category</a></li>
                            <li><a href="#" className="hover:text-blue-400">White Fillings</a></li>
                        </ul>
                    </div>

                    {/* Register */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Register</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                            <li><a href="#" className="hover:text-blue-400">Support Center</a></li>
                            <li><a href="#" className="hover:text-blue-400">Privacy & Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400">Terms & Condition</a></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default HomePage