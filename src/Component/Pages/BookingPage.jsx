import React, { useState } from 'react';
import Aheaderimage from '../../assets/Aheader.png';
import dayjs from 'dayjs';
import bookingSlide from '../../assets/bookingSlide.png'

const availableDates = [
    14, 15, 18, 19, 20, 25, 26, 27, 28, 29, 30
];

const AppointmentCalendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = currentDate.daysInMonth();
    const startDay = currentDate.startOf('month').day(); // 0 = Sunday

    const generateDates = () => {
        const dates = [];
        for (let i = 0; i < startDay; i++) {
            dates.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const date = currentDate.date(i);
            dates.push(date);
        }
        return dates;
    };

    const changeMonth = (direction) => {
        setCurrentDate(currentDate.add(direction, 'month'));
        setSelectedDate(null);
    };

    const times = [
        "5:30 PM", "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM"
    ];

    const isAvailable = (date) => availableDates.includes(date.date());

    return (
        <div className='mt-[-40px]'>
            <img src={Aheaderimage} alt='' className='w-full h-[200px] object-cover' />
            <h1 className='text-2xl text-center mt-6 font-medium text-[#264373] font-Lexend'>
                SCHEDULE APPOINTMENT
            </h1>

            <div className="flex max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden mt-10 border h-[650px] w-[1000px]">
                {/* Sidebar */}
                {/* <div className="w-1/4 bg-gray-100 p-6 mt-30">
                    <div className="text-center mb-6">
                        <img
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="lawyer"
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        <p className="text-sm mt-2 font-semibold text-gray-800">CORPORATE LAWYER</p>
                        <p className="text-blue-600 font-semibold mt-1">Step 1</p>
                        <p className="text-xs text-gray-500">Choose date for appointment</p>
                    </div>

                    <div className="space-y-6">
                        <div className="text-blue-600 font-bold">📅 DAY</div>
                        <div className="text-blue-600 font-bold">⏰ TIME</div>
                        <div className="text-gray-400 font-semibold">💳 MAKE PAYMENT</div>
                    </div>
                </div> */}
               <img src={bookingSlide} alt='' className='mt-[40px] ml-[40px] mb-[40px]'/>
                {/* Calendar + Time */}
                <div className="w-3/4 p-6 flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold mb-4 mt-10">SELECT DATE AND TIME</h2>

                        {/* Month Nav */}
                        <div className="flex items-center justify-between max-w-sm mb-4 mt-[90px]">
                            <button onClick={() => changeMonth(-1)} className="text-orange-500 text-xl">&lt;</button>
                            <span className="font-semibold text-lg">{currentDate.format("MMMM YYYY")}</span>
                            <button onClick={() => changeMonth(1)} className="text-orange-500 text-xl">&gt;</button>
                        </div>

                        {/* Weekday Labels */}
                        <div className="grid grid-cols-7 text-center text-sm text-gray-700 mb-2">
                            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                                <div key={day} className="font-medium">{day}</div>
                            ))}
                        </div>

                        {/* Date Grid */}
                        <div className="grid grid-cols-7 text-center text-sm gap-y-2">
                            {generateDates().map((date, idx) => (
                                <div key={idx}>
                                    {date ? (
                                        <button
                                            disabled={!isAvailable(date)}
                                            onClick={() => setSelectedDate(date)}
                                            className={`w-8 h-8 rounded-full transition 
                        ${selectedDate?.isSame(date, "day") ? "bg-orange-500 text-white" : ""}
                        ${isAvailable(date) ? "hover:bg-orange-100 text-gray-800" : "text-gray-400 cursor-not-allowed"}
                      `}
                                        >
                                            {date.date()}
                                        </button>
                                    ) : <div></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Time Slots */}
                    {selectedDate && isAvailable(selectedDate) && (
                        <div className="flex-1 mt-40 ">
                            <h3 className="text-gray-700 font-medium mb-2 ml-20">
                                {selectedDate.format("dddd, MMMM D")}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                                {times.map((time) => (
                                    <button
                                        key={time}
                                        className=" w-[180px] border border-gray-300 rounded-lg ml-20 px-4 py-2 text-gray-700 hover:bg-blue-100 transition"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex items-center justify-center mt-20 mb-50'>
            <button className='w-[216px] h-[55px] rounded-full text-white text-2xl ' style={{backgroundColor:"#264373"}}>NEXT</button>
            </div>
        </div>
    );
};

const BookingPage = () => {
    return (
        <div className='bg-white min-h-screen py-10'>
            <AppointmentCalendar />
        </div>
    );
};

export default BookingPage;
