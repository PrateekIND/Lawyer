import React, { useState } from 'react';
// import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { BsTwitterX } from 'react-icons/bs';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userType, email, password });
  };

  const advocateText = (
    <>
      <p className="text-sm text-gray-600 underline underline-offset-4 leading-relaxed">
        Here, we believe that building a strong professional
        network begins with your participation. We are delighted
        to offer a modern and user-friendly service to ensure you
        have the best experience.
      </p>
    </>
  );

  const userText = (
    <>
      <p className="text-sm text-gray-600 underline underline-offset-4 leading-relaxed">
        Here, we believe that building a strong professional
        network begins with your participation. We are delighted
        to offer a modern and user-friendly service to ensure you
        have the best experience.
      </p>
    </>
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col md:flex-row w-4/5 shadow-lg border  rounded-md overflow-hidden">
        <div className="bg-blue-50  w-full md:w-1/2 p-10 text-left flex flex-col justify-center">
          <h2 className="text-2xl  font-bold text-gray-800 mb-4">
            {userType === 'user' ? 'User Sign In' : 'Advocate Sign In'}
          </h2>
          {userType === 'user' ? userText : advocateText}
        </div>

        <div className="w-full md:w-1/2 p-10">
          <div className="flex space-x-4 mb-6 border-b border-gray-300 pb-2">
            <button
              onClick={() => setUserType('advocate')}
              className={`text-sm font-semibold ${userType === 'advocate' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
            >
              ADVOCATE
            </button>
            <button
              onClick={() => setUserType('user')}
              className={`text-sm font-semibold ${userType === 'user' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
            >
              USER
            </button>
          </div>

            <h2 className="text-2xl font-bold text-blue-900 mb-1 text-left">SIGN IN</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              
              <input
                type="text"
                value={email}
                placeholder='Enter Email or Phone'
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              
              <input
                type="password"
                value={password}
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <div className="text-right text-sm mt-1">
                <a href="#" className="text-blue-500 hover:underline">Recover Password ?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded shadow-md hover:from-blue-600 hover:to-indigo-600"
            >
              Sign in
            </button>
          </form>

          {/* <div className="text-center my-4 text-sm text-gray-500">Or Continue with</div> */}
{/* 
          <div className="flex justify-center space-x-4">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <FcGoogle className="text-xl" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <FaFacebookF className="text-xl text-blue-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <BsTwitterX className="text-xl text-black" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <FaApple className="text-xl text-black" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
