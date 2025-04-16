import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
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
    );
}

export default Footer;
