import React from 'react';
import Aheaderimage from '../../assets/Aheader.png';
import { Search, Filter, SortAsc } from 'lucide-react'; // Optional, if you use lucide-react icons
import Mireesha from '../../assets/Mireesha.png'
import badge from '../../assets/Badge.png'
const advocates = [
    {
        id: 1,
        name: "Mireesha",
        specialization: "Business Lawyer",
        experience: "5 Years",
        languages: "English, Hindi",
        isNew: true,
        price: "FREE",
        image: Mireesha,
    },
    {
        id: 1,
        name: "Mireesha",
        specialization: "Business Lawyer",
        experience: "5 Years",
        languages: "English, Hindi",
        isNew: true,
        price: "FREE",
        image: Mireesha,
    },
    {
        id: 1,
        name: "Mireesha",
        specialization: "Business Lawyer",
        experience: "5 Years",
        languages: "English, Hindi",
        isNew: true,
        price: "FREE",
        image: Mireesha,
    },
    {
        id: 1,
        name: "Mireesha",
        specialization: "Business Lawyer",
        experience: "5 Years",
        languages: "English, Hindi",
        isNew: true,
        price: "FREE",
        image: Mireesha,
    },
    {
        id: 1,
        name: "Mireesha",
        specialization: "Business Lawyer",
        experience: "5 Years",
        languages: "English, Hindi",
        isNew: true,
        price: "FREE",
        image: Mireesha,
    },
    {
        id: 1,
        name: "Mireesha",
        specialization: "Business Lawyer",
        experience: "5 Years",
        languages: "English, Hindi",
        isNew: true,
        price: "FREE",
        image: Mireesha,
    }
];

const ChatAdvocate = () => {
    return (
        <div className="w-full mb-50 ">
            {/* Header Section */}
            <div className="relative w-full">
                <img src={Aheaderimage} alt="Header" className="w-full h-[170px] object-cover" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold drop-shadow-lg text-center">
                    We Find The Best For You!!
                </h1>
                <button className="absolute top-4 right-4 bg-white text-black px-4 py-1 rounded-md text-sm shadow">
                    Join as Lawyer
                </button>
            </div>

            {/* Top Controls */}
            <div className="flex flex-wrap items-center gap-8 justify-center  px-6 py-8">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold w-[220px] ">
                    Talk to advocate
                </button>
                <div className="text-sm font-bold flex items-center gap-2 ">
                    Available Balance: <span className="text-black">50</span>
                </div>
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg text-sm font-semibold w-[150px]">
                    Recharge
                </button>
                <button className="border border-gray-300 text-black-500 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                    <Filter size={16} /> Filter
                </button>
                <button className="border border-gray-300 text-black-500 px-4 py-2 rounded-l text-sm font-semibold flex items-center gap-2">
                    <SortAsc size={16} /> Sort By
                </button>

                {/* Search Input */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search Name..."
                        className="px-2 py-1 text-sm focus:outline-none font-semibold"
                    />
                    <button className="bg-orange-500 text-white p-3 rounded-lg ">
                        <Search size={16} />
                    </button>
                </div>
            </div>

            {/* Advocate Cards */}
            <div className=" ml-35 grid grid-cols-1 sm:grid-cols-2  gap-8 px-6 pb-10 mt-30  ">
                {advocates.map((advocate) => (
                    <div key={advocate.id} className="bg-white p-6 rounded-lg shadow-md flex items-center text-center relative h-[200px] w-[465px]">
                        <div className="absolute top-4 right-4">
                        <img src={badge} alt='' className=''/>
                        </div>
                        <div className=' grid grid-cols-1 '>
                            <img src={advocate.image} alt={advocate.name} className="w-30 h-30 rounded-full mt-[-25px]" />
                            {advocate.isNew && <span className="text-orange-500 text-2xl font-semibold ">New!</span>}
                        </div>
                        <div className='grid grid-cols-1 ml-4 text-left   '>
                            <h2 className="text-2xl font-semibold mt-[-35px]">{advocate.name}</h2>
                            <p className="text-xm text-gray-500 ">{advocate.specialization}</p>
                            <p className="text-xm text-gray-400">Exp.: {advocate.experience}</p>
                            <p className="text-xm text-gray-400">{advocate.languages}</p>
                            <p className="text-orange-500 text-sm font-bold mt-5">{advocate.price}</p>
                        </div>
                        <button className="border border-orange-500 text-orange-500   h-[47px] w-[100px] px-4 py-1 rounded-lg text-sm font-semibold absolute bottom-8 right-4">
                            Call
                        </button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatAdvocate;
