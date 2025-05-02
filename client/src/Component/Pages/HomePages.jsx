import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import middle_image from '../../assets/middle-png.png'
// import location_image from '../../assets/location.png'
import pri_headerimage1 from '../../assets/pri-headerimage1.png'
import text_head from '../../assets/text-head.png'
import { Search, Calendar, MapPin } from 'lucide-react';
import { Button } from '@mui/material';
import CardsSlider from '../../Component/Slider/CardsSlider';
import Legal from '../../assets/Legal.png'
import setup from '../../assets/Setup-image.png'
import phoneImage from '../../assets/PhoneImage.png'
const HomePage = () => {
    return (
        <>

            <hero>
                <div className='relative w-full   items-center m-0'>
                    <img src={pri_headerimage1} alt=' ' className='w-[1440px] h-[717px] ' />
                    {/* <div className="absolute inset-0 bg-blue-200 opacity-30"></div> */}
                    <img src={text_head} alt='' className='absolute  w-[480px]  h-[200px]flex items-center top-[30px] ml-[400px]' />
                    <div className="bg-white relative z-10 rounded-2xl shadow-md mx-auto flex flex-col items-center justify-center mt-[-210px]"
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
                    <img src={setup} alt='' className='h-[525px] w-[1363px] ml-[40px]' />
                </div>
                <CardsSlider />
                <div className='flex items-center justify-center'>
                    <img src={Legal} alt='' className='h-[532px] w-[670.6px] ' />
                    <div className="max-w-sm  rounded-lg p-6 bg-white shadow-md font-sans mt-[35px] ">
                        <h2 className="text-lg font-normal text-gray-800 mb-2">
                            Connect with our{' '}
                            <span className="text-orange-500 font-bold">Legal Advisors</span>
                        </h2>
                        <p className="text-sm text-gray-700">Reliable legal solutions tailored to your needs.</p>
                        <p className="text-sm text-gray-700">Trust us to navigate complexities with expertise and integrity.</p>
                        <p className="text-sm text-gray-700 mb-4">Your justice, our commitment.</p>
                        <button
                            // onClick={TalktoLawyer}
                            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                        >
                            Talk to lawyer
                        </button>
                    </div>
                </div>
            </section>
            <div>
                <h1>Near to your Lawyer</h1>
            </div>
            <div className=" flex items-center justify-center " >
                <div className="max-w-6xl mx-auto rounded-[32px] p-10 flex flex-col md:flex-row items-center justify-between shadow-lg -mb-46 relative z-10" style={{ backgroundColor: '#3AAAA5' }}>

                    {/* Left Content */}
                    <div className="md:w-1/2 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            If You Would Like to Our Service to Download App
                        </h2>
                        <p className="text-sm text-gray-600">Description</p>

                        <p className="font-medium text-gray-800 text-sm">Get the link to download the app</p>
                        <div className="flex gap-2">
                            <input
                                type="tel"
                                placeholder="+91 Enter Phone Number"
                                className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-[250px] focus:outline-none"
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Send SMS
                            </button>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <button className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
                                <i className="fab fa-apple"></i> Download on the App Store
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
                                <i className="fab fa-google-play"></i> Download on the Play Store
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <div className="relative">
                            <div className="absolute    z-0"  />
                            <img
                                src={phoneImage}
                                alt="Phone"
                                className="relative z-10  rounded-2xl w-[440px] h-[470px]  "
                            />
                        </div>
                    </div>
                </div>
                {/* <footer className=" text-white py-10 w-[1440px] h-[660px] absolute" style={{ backgroundColor: '#25416F' }}>
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mt-[350px]">

                       
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

                  
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Social Media</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
                                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                            </ul>
                        </div>

                  
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Product</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-400">Schedule Appointment</a></li>
                                <li><a href="#" className="hover:text-blue-400">New Customer Forms</a></li>
                                <li><a href="#" className="hover:text-blue-400">Category</a></li>
                                <li><a href="#" className="hover:text-blue-400">White Fillings</a></li>
                            </ul>
                        </div>

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
                </footer> */}
                </div>
            </>
            )
}

            export default HomePage