import React, { useState } from 'react';


const Slider = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };


    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };


    return (

        <div className="relative">

            <div className="overflow-hidden w-full">


                <div
                    className="flex transition-transform duration-500 transform translate-x-[-100%]"
                    style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
                        </div>
                    ))}

                </div>


            </div>


            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-lg">
                &lt;
            </button>


            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-lg">
                &gt;
            </button>
        </div>


    );
};

export default Slider;
