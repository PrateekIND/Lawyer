import React  from 'react';
import Aheaderimage from '../../assets/Aheader.png';
import { CheckCircle, Calendar, Clock } from 'lucide-react';

const BookingConfirmation = ({ selectedDate = "18 Sep, 2023", selectedTime = "5:30 PM - 5:55 PM", onStartOver }) => {
    return (

        <div className=''>
            <img src={Aheaderimage} alt='' className='w-full h-[200px] object-cover' />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg text-center mt-[-190px]">
                    We Find The Best For You!!
                </h1>
                <button
                    // onClick={handleBuy}
                    className="absolute top-2 right-2 bg-white text-black  px-3 py-1 text-sm rounded-md shadow-md mt-[70px]"
                >
                    Join As Lawyer
                </button>
            <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 mt-[-70px]">
                <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
                    {/* Checkmark Icon */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-blue-900 text-white p-4 rounded-full">
                            <CheckCircle size={40} strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="flex justify-center items-center gap-6 text-orange-400 font-medium text-sm mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar size={20} />
                            <span>{selectedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={20} />
                            <span>{selectedTime}</span>
                        </div>
                    </div>

                    {/* Message */}
                    <p className="text-gray-800 font-semibold mb-1">Thanks!</p>
                    <p className="text-gray-600 text-sm mb-6">
                        Your booking is complete. An email has been sent to you with details of your booking.
                    </p>

                    {/* Start Over Button */}
                    <button
                        onClick={onStartOver}
                        className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-800"
                    >
                        START OVER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingConfirmation
