import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider1 from '../../assets/pri-Slider1.png'
import Slider2 from '../../assets/pri-Slider2.png'
import Slider3 from '../../assets/pri-Slider3.png'
import Slider4 from '../../assets/pri-Slider4.png'
import Slider5 from '../../assets/pri-Slider5.png'
// const cityData = [
//     Slider1,Slider2,Slider3,Slider4
// ]
const cityData = [
    { name: 'Mumbai', img: Slider1 },
    { name: 'Pune', img: Slider2 },
    { name: 'Lucknow', img: Slider3 },
    { name: 'Delhi', img: Slider4 },
    { name: 'Bengluru', img: Slider5 },
  ];
  

const CardsSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 4;

    const goPrev = () => {
        setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
    };

    const goNext = () => {
        if (startIndex + cardsPerPage < cityData.length) {
            setStartIndex(startIndex + cardsPerPage);
        }
    };

    const visibleCards = cityData.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div className="w-full px-6">
            <div className="flex justify-center gap-6 mb-6">
                {visibleCards.map((city, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg w-[260px]">
                        <img
                            src={city.img}
                            alt={city.name}
                            className="rounded-t-xl w-full h-[180px] object-cover"
                        />
                        <div className="p-3 text-center font-semibold text-lg text-[#140342]">
                            {city.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
                <button
                    onClick={goPrev}
                    className="p-2 rounded bg-orange-100 hover:bg-orange-200 disabled:opacity-50"
                    disabled={startIndex === 0}
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={goNext}
                    className="p-2 rounded bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
                    disabled={startIndex + cardsPerPage >= cityData.length}
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default CardsSlider;
