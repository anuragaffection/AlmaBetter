import React, { useEffect, useState } from 'react'
import gym_bg from '../assets/gym-bg.jpg'
import gym_bg_three from '../assets/gym-bg-three.jpg'
import gym_bg_two from '../assets/gym-bg-two.jpeg'
import gym_bg_four from '../assets/gym-bg-four.jpg'
import gym_bg_five from '../assets/gym-bg-five.jpeg'


const imagesData = [gym_bg, gym_bg_five, gym_bg_four, gym_bg_three, gym_bg_two]


function Home() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1))
        }, 2000);

        return () => clearInterval(interval)

    }, [currentImageIndex])


    return (
        <div
            className='bg-cover'
            style={{ backgroundImage: `url(${gym_bg})` }}
        >
            <div className='py-20 md:py-28 px-5 flex flex-col md:flex-row gap-8 justify-between items-center text-lg font-semibold'>

                <div className='flex-1 flex flex-col gap-5 shadow shadow-black'>
                    <div className='text-lime-600 text-xl font-normal font-mono'> Unleash Your Potential </div>
                    <div className='text-6xl uppercase tracking-wide'> Your Destination For Health And Wellness</div>
                    <div className='text-lime-600 text-xl font-normal font-mono'> Unleash Your Secret </div>
                    <button className='mt-4 p-2 px-5 w-full bg-lime-600 hover:bg-lime-400 text-center text-gray-950 font-bold rounded-lg duration-500'>Know More About Us </button>
                </div>

                <div className='flex-1'>
                    <img
                        className='w-96 md:w-full h-96  object-cover rounded-xl border border-lime-600'
                        src={imagesData[currentImageIndex]}
                        alt="sliderImage"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home