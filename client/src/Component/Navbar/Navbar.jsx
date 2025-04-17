import React from "react";
// import { Menu, X } from "lucide-react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white  h-16 top-0 w-full z-50    ">
            <div className=" mx-auto px-4 h-full flex justify-between items-center">
                <div className=" flex  items-center space-x-2">
                    <img src={logo} alt="" className="h-10 w-auto"/>
                </div>
                <div className="flex space-x-8">
                    <a href="#" className="text-black text-xl mr-8 ">Home</a>
                    <a href="#" className="text-black text-xl mr-8 ">Aboutus</a>
                    <a href="#" className="text-black text-xl ">Category</a>
                </div>
                <div className="flex space-x-8">
                <Link to="/login" className="text-black text-xl">Login</Link>
                <Link to="/signup"  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-0.5 px-1.5  rounded-md transition ">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
