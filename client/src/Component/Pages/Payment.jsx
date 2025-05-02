import React, { useState } from 'react';
import Aheaderimage from '../../assets/Aheader.png';
import PaymentSlide from '../../assets/PayementSlide.png'

const Payment = ({ selectedDate = "18 Sep, 2023", selectedTime = "5:30 P.M.", lawyerFees = 1230 }) => {
    const discountRate = 0.374; // 37.4%
    const discountedPrice = lawyerFees - (lawyerFees * discountRate);
    const gst = discountedPrice * 0.18; // 18%
    const finalPrice = Math.round(discountedPrice + gst);

    return (
        <div>
            <img src={Aheaderimage} alt='' className='w-full h-[200px] object-cover mt-[-10]' />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg text-center mt-[-190px]">
                    We Find The Best For You!!
                </h1>
                <button
                    // onClick={handleBuy}
                    className="absolute top-2 right-2 bg-white text-black  px-3 py-1 text-sm rounded-md shadow-md mt-[70px]"
                >
                    Join As Lawyer
                </button>
            <h1 className='text-2xl text-center mt-6 font-medium text-[#264373] font-Lexend'>
                MAKE PAYMENT
            </h1>
            <div className="flex max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden mt-10  h-[650px] w-[1000px] mb-40">
                <img src={PaymentSlide} alt='' className='mt-[40px] ml-[40px] mb-[40px]' />
                <div className="w-3/4 p-8  ml-30">
                    <h2 className="text-xl font-semibold mb-2">SELECTED DATE AND TIME :</h2>
                    <p className="mb-6 text-sm">{selectedDate} & {selectedTime}</p>

                    <div className="border border-black rounded-2xl p-6 max-w-md">
                        <h3 className="text-center font-bold border-b pb-2 mb-4">TALK TO LAWYER</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>PROFESSIONAL FEES</span>
                                <span>₹{lawyerFees}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>DISCOUNT</span>
                                <span>{Math.round(discountRate * 100)}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>PRICE WITH DISCOUNT</span>
                                <span>₹{Math.round(discountedPrice)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>GST(18%)</span>
                                <span>₹{gst.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>PRICE WITH GST</span>
                                <span>₹{finalPrice}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-bold text-lg">
                                <span>TOTAL AMOUNT</span>
                                <span>₹{finalPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[40px]'>
                    <button className=" mt-6 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 w-[300px] h-[50px]">
                        MAKE PAYMENT
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
