import React, { useState } from 'react';
// import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import image from '../../assets/pr-Signup.png'; // Replace with your image path

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(form);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  h-screen w-full"> 
    <div className="flex flex-col md:flex-row justify-center items-center h-[80%] bg-white shadow-2xl shadow-slate-600 rounded-lg p-4">
      <div className="md:w-1/2 w-full">
        <img
          src={image}
          alt="Sign Up Visual"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full p-8 ">
        <h2 className="text-2xl font-bold text-blue-900 mb-1">SIGN UP</h2>
        <p className="text-sm text-gray-600 mb-4">Enter your details to register</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            className="w-full p-2 border border-gray-300 rounded"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            className="w-full p-2 border border-gray-300 rounded"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password*"
            className="w-full p-2 border border-gray-300 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password*"
            className="w-full p-2 border border-gray-300 rounded"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span>
              I agree to the{' '}
              <a href="#" className="text-orange-500 underline">
                Terms and conditions
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Sign up
          </button>
        </form>

        <div className="my-4 text-center relative">
          <span className="absolute left-0 top-1/2 w-full border-t border-gray-300"></span>
          <span className="relative px-2 bg-white text-sm text-gray-500">
            Or Sign Up with
          </span>
        </div>

        {/* <div className="flex justify-center space-x-4">
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <FaGoogle className="text-xl" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <FaFacebookF className="text-xl text-blue-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <FaLinkedinIn className="text-xl text-blue-700" />
          </button>
        </div> */}

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="#" className="text-orange-600 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignUp;