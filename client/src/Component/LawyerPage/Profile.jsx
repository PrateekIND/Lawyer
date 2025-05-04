import React from "react";
import Navbar from "../../Component/Navbar/Navbar"; // adjust the path based on your structure
import Aheaderimage from "../../assets/Aheader.png"; // make sure the image path is correct
import Mireesha from "../../assets/Mireesha.png";
import badge from "../../assets/Badge.png";
import { FaStar } from "react-icons/fa";
import { IoChatbubblesOutline, IoCallOutline } from "react-icons/io5";

const reviews = [
    {
        name: "Jane Cooper",
        date: "01/01/2021",
        rating: 5,
        comment:
            "I was facing a complex contractual dispute, and Advocate Lawyer's handled it with exceptional expertise. They were responsive, committed, and achieved a better outcome than I expected. Highly recommend!",
    },
    {
        name: "Anika Sharma",
        date: "21/01/2021",
        rating: 5,
        comment:
            "As a startup founder, I needed clear and concise legal advice. Advocate Arnavi took the time to understand my business and provided practical solutions that helped me navigate the legal complexities. Invaluable!",
    },
    {
        name: "Keshav Jha",
        date: "01/01/2021",
        rating: 5,
        comment:
            "Advocate Arnavi is a true professional. They are knowledgeable, detail-oriented, and always kept me informed throughout the process. Their legal services were essential in resolving my property dispute.",
    },
];

const Profile = () => {
    return (
        <div>
            {/* <Navbar /> */}

            {/* Header Section */}
            <div className="relative w-full">
                <img
                    src={Aheaderimage}
                    alt="Header"
                    className="w-full h-[170px] object-cover"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold drop-shadow-lg text-center">
                    We Find The Best For You!!
                </h1>
                <button className="absolute top-4 right-4 bg-white text-black px-4 py-1 rounded-md text-sm shadow">
                    Join as Lawyer
                </button>
            </div>

            {/* Lawyer Profile Section */}
            <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
                <div
                    className="gap-6 items-center h-[500px] w-[900px] p-6 shadow-2xl rounded-lg bg-gradient-to-r from-blue-100 to-white...">

                    <div className="flex items-center gap-6  ">
                        <div className="relative w-fit">
                            {/* Circular Image */}
                            <img
                                src={Mireesha}
                                alt="Lawyer"
                                className="h-50 w-45 scale-x-110 rounded-full object-cover mt-8"
                            />

                            {/* Badge on bottom center of circular image */}
                            <img
                                src={badge}
                                alt="badge"
                                className="absolute bottom-0 right-0 mt-[-20px] h-8 w-8"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-2xl font-semibold text-gray-600">Arnavi</h2>
                            <p className="text-gray-500 font-bold">Business lawyer</p>
                            <p className="text-gray-500 font-bold">Experience: 5 years</p>
                            <p className="text-gray-500 font-bold">Languages: English, Hindi</p>
                            <p className="font-semibold text-orange-300">₹30/min</p>
                        </div>
                    </div>
                    <div className="  flex items-center justify-evenly">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-2xl flex items-center gap-2">
                            Start Chat  <IoChatbubblesOutline />
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-2xl flex items-center gap-4 ">
                            start Call   <IoCallOutline />
                        </button>

                    </div>
                    <div className="mt-14">
                        <h3 className="font-bold mb-2 text-center text-xl" style={{ color: "#264373" }}>About me</h3>
                        <p className="text-sm font-semibold text-gray-500 flex items-center ml-14 mr-14 leading-[25px] mt-4" style={{ wordSpacing: "0.25rem" }}>
                            I'm a business lawyer based in Delhi, passionate about helping
                            businesses thrive. I specialize in contracts, IP, and regulatory
                            compliance. My goal is to provide practical, strategic legal
                            advice that empowers my clients. Let's work together to achieve
                            your business objectives.
                        </p>
                    </div>
                </div>

                {/* Ratings Section */}
                <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Ratings & Reviews</h3>
                    <div className="flex gap-10 ">
                        {/* Summary */}
                        <div className="w-1/3 space-y-2 text-sm">
                            <p className="text-4xl font-bold flex items-center">
                                4.5 <FaStar className="text-yellow-500 ml-2" />
                            </p>
                            <p className="text-gray-600">273 Reviews</p>
                            <p className="text-green-600 font-semibold">88% Recommended</p>

                            {[5, 4, 3, 2, 1].map((star) => (
                                <div key={star} className="flex items-center gap-2">
                                    <span>{star}</span>
                                    <div className="w-40 h-2 bg-gray-200 rounded">
                                        <div
                                            className="h-2 bg-yellow-400 rounded"
                                            style={{ width: `${(6 - star) * 15}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Individual Reviews */}
                        <div className=" grid grid-cols-1 gap-3 w-2/3 space-y-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="border-b pb-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-bold">{review.name}</p>
                                            <div className="flex text-yellow-500">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                    <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
