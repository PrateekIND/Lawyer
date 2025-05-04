import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import lawyerimage1 from '../../assets/lawyerimage1.png'
import lawyerimage2 from '../../assets/lawyerimage2.png'
import pri_headerimage from '../../assets/pri-headerimage.png'
import pri_LawyerD from '../../assets/pri-LawyerD.png'
import { Slider } from '@mui/material'
import testimonials from '../../assets/Testimonials.png'
import phoneImage from '../../assets/PhoneImage.png'
import { Button } from '@mui/material';

const lawyers = [
        {
            name: "Hritik Roshan",
            court: "at Delhi High Court Since 2015",
            rating: "4.9 (105 Ratings)",
            img: lawyerimage1,
        },
        {
            name: "Imran Hashmi",
            court: "at Delhi High Court Since 2015",
            rating: "4.9 (105 Ratings)",
            img: lawyerimage2,
        },
        {
            name: "Katrina Kaif",
            court: "at Delhi High Court Since 2015",
            rating: "4.9 (105 Ratings)",
            img: pri_LawyerD,
        },
    ];
const Lawyer = () => {
  const [talktime, setTalktime] = useState(35)
  const pricePerMin = 22
  const fullPrice = 1230
  const discountedPrice = talktime * pricePerMin

  const handleBuy = () => {
    alert(`You selected ${talktime} minutes. Total: ₹${discountedPrice}`)
  }

  return (

    <div className='relative   m-0'>

      <img src={pri_headerimage} alt=' ' className='w-[1440px] h-[450px] ' />
      <h1 className="absolute  text-white text-3xl font-bold   text-center  mt-[-400px] ml-[525px]">
        We Find The Best For You!!
      </h1>
      <button
        onClick={handleBuy}
        className="absolute top-2 right-2 bg-white text-black  px-3 py-1 text-sm rounded-md shadow-md mt-4"
      >
        Join As Lawyer
      </button>
      <div className='  flex items-center justify-center mt-[-300px] '>
        <img src={pri_LawyerD} alt='' className=' bg-white rounded-full border-1 h-[350px] w-[300px] flex items-center' />
      </div>
      <div className="  w-[1280px] max-w-5xl mx-auto  p-6 bg-white rounded-t-[198px] rounded-b-[80px] shadow-lg border text-gray-800 font-sans mt-[-50px] ">
        <h1 className="text-2xl font-bold text-center mt-6">Katrina Kaif</h1>
        <p className="text-center text-gray-500 mb-6">at Delhi High Court Since 2015</p>

        <div className="mb-6 h-[279x] w-[1258px] ml-[100px]">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Cases Handled: 200+ across Delhi High Court, Supreme Court of India, and NCLT</li>
            <li>Specialization: Business Law, Contract Disputes, Property Settlements, Arbitration, Consumer Protection</li>
            <li>Reputation: Strategic legal solutions, ethical advocacy, strong courtroom representation</li>
            <li>Recognition: <span className="text-blue-600">India's Top Legal Experts 2023</span></li>
          </ul>
        </div>

        <div className="mb-6 ml-[100px]">
          <h2 className="text-xl font-semibold mb-2">Practice Areas</h2>
          <ul className=" gap-2 text-sm list-disc list-inside">
            <li>Corporate Law – Contracts, Mergers & Acquisitions, Compliance</li>
            <li>Civil Litigation – Property & Contract Disputes, Debt Recovery</li>
            <li>Intellectual Property – Trademark, Copyright, Patent Protection</li>
            <li>Arbitration & Mediation – Alternative Dispute Resolution</li>
            <li>Cyber Law – IT Laws, Cybersecurity, Data Privacy</li>
            <li>Consumer Protection – Unfair Trade Practices Representation</li>
          </ul>
        </div>


        <div className="mb-6 ml-[100px]">
          <h2 className="text-xl font-semibold mb-2">Credentials</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>LLB – Delhi University (<span className="text-yellow-500">Gold Medalist</span>)</li>
            <li>Bar Council of India – Reg. No. [xxxxx]</li>
            <li>Member – High Court & Supreme Court Bar Associations</li>
            <li>Certified Arbitrator – Indian Council of Arbitration</li>
          </ul>
        </div>

        <div className="mb-6 ml-[100px]">
          <h2 className="text-xl font-semibold mb-2">Experience & Achievements</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><span className="text-orange-600 font-semibold">10+ Years</span> in Indian courts</li>
            <li><span className="text-orange-600 font-semibold">200+ cases</span>, including high-profile disputes</li>
            <li>Legal Advisor to startups, MSMEs, and multinational corporations</li>
            <li>Appeared before Supreme Court, Delhi High Court, NCLT, Consumer Forums</li>
            <li>Panel Lawyer for top companies</li>
            <li>Featured in <span className="text-orange-600">India’s Top Legal Experts 2023</span></li>
          </ul>
        </div>

        <div className="mb-6 ml-[100px]">
          <h2 className="text-xl font-semibold mb-2">Consultation & Fees</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Consultation Fee: ₹5,000/session (Physical/Virtual)</li>
            <li>Case Charges: Based on complexity & scope</li>
            <li>Flexible Payment & Retainer Plans</li>
            <li>First consultation FREE for startups & MSMEs!</li>
          </ul>
        </div>

        <div className="mb-4 ml-[100px]">
          <h2 className="text-lg font-semibold mb-2">Select talktime</h2>
          <Slider
            value={talktime}
            min={5}
            max={60}
            step={5}
            onChange={(e, val) => setTalktime(val)}
            valueLabelDisplay="auto"
          />
          <div className="flex justify-between text-sm mt-1 text-gray-600">
            <span>5 min</span>
            <span>60 min</span>
          </div>
          <div className="mt-4 text-center text-sm">
            <p className="mb-1 ">{talktime} min Talktime</p>
            <p className="text-gray-700">
              ₹{discountedPrice}{' '}
              <span className="line-through text-gray-400">₹{fullPrice}</span>
              <span className="text-green-600 font-semibold ml-2">
                Save ₹{fullPrice - discountedPrice}
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={handleBuy}
          className="mb-4 ml-10 w-[150px] text-white py-2 rounded-md font-semibold"style={{backgroundColor:"#264373"}}
        >
          Buy Talktime
        </button>
      </div>
      <div className='w-[1000px] h-[860px] ml-[100px] flex items-center justify-center mt-[-100px]'>
        <img src={testimonials} alt='' className='ml-[170px]' />
      </div>
      <div className="px-4 py-8 bg-white text-center mt-[-50px]">
            <h2 className="text-3xl font-bold mb-8">Near to your Lawyer</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-start   mb-20 ml-40 mr-40 ">
                {lawyers.map((lawyer, index) => (
                    <div
                        key={index}
                        className="  w-[300px]  h-[300px] p-6 rounded-xl shadow-md flex flex-col items-center" style={{ backgroundColor: "#FF7A0029" }}
                    >
                        <img
                            src={lawyer.img}
                            alt={lawyer.name}
                            className="h-[250px] object-cover rounded-md mb-4"
                        />
                        <div className="text-center bg-white rounded-lg mt-[-50px]">
                            <h3 className="font-semibold text-lg">{lawyer.name}</h3>
                            <p className="text-gray-500 text-sm">{lawyer.court}</p>
                            <p className="text-orange-500 text-sm mt-2">{lawyer.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
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
              <div className="absolute    z-0" />
              <img
                src={phoneImage}
                alt="Phone"
                className="relative z-10  rounded-2xl w-[440px] h-[470px]  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Lawyer