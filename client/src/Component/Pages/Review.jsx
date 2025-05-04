import React from "react";
import pri_LawyerD from '../../assets/pri-LawyerD.png'
import lawyerimage1 from '../../assets/lawyerimage1.png'
import lawyerimage2 from '../../assets/lawyerimage2.png'
const LawyerSection = () => {
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

    const review = {
        stars: 5,
        date: "Sun Jan 08 2023",
        text: `Wow! The delivery was beyond my expectations. My Pattern Campaign received a lot of attention. Highly recommend. Thanks for a great job.`,
        name: "Abigail Richard",
        reviewed: "Sajib Ahmed",
    };

    return (
        <div className="px-4 py-8 bg-white text-center">
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


            <h3 className="text-2xl font-semibold mb-6">
                12000+ Verified Reviews from Clients
            </h3>

            <button className="mb-10 px-6 py-2 text-white rounded-md" style={{backgroundColor:"#264373"}}>
                Find Top Rated Lawyer
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-40 mr-40">
                {Array(6)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className=" rounded-md shadow-sm p-4 text-left bg-white"
                        >
                            <div className="flex items-center justify-between mb-2 text-sm">
                                <span className="text-orange-500">⭐ {review.stars}.0</span>
                                <span className="text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{review.text}</p>
                            <p className="text-sm">
                                <span className="font-semibold">{review.name}</span> reviewed{" "}
                                <span className="font-bold">{review.reviewed}</span>
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default LawyerSection;
