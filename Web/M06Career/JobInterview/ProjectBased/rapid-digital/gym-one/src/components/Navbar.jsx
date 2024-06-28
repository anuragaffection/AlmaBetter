import gym_bg from '../assets/gym-bg.jpg'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'



const navbarContainer = `flex justify-around items-center bg-black p-4`;
const logoWrapper = `flex justify-center items-center gap-2 cursor-pointer`
const logoImg = 'rounded-full border border-lime-600 h-10 w-10'
const logo = ` text-xl text-white font-bold`;
const nav = ` hidden md:flex justify-center items-center list-none gap-10 `;
const navLink = `hover:text-lime-400 text-xl font-semibold duration-500 cursor-pointer`;
const btnSytle = 'hidden lg:flex bg-gradient-to-r from-lime-700 to-lime-500 shadow hover:shadow-lime-400 duration-500 text-gray-950 rounded-lg p-3 px-8'
const faWrapper = 'md:hidden cursor-pointer text-lime-600 hover:text-lime-400 duration-200'
const mobileNav = 'md:hidden h-screen bg-gray-950 w-1/2 fixed right-0 p-4'
const mobileNavUl = 'flex flex-col gap-7 justify-center items-center'

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const sections = ['about us', 'location', 'portfolio', 'More', 'contact'];

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className='sticky top-0 text-lime-600 z-10'>
                <div className={navbarContainer}>
                    <div
                        onClick={() => scrollToTop()}
                        className={logoWrapper}>
                        <img
                            className={logoImg}
                            src={gym_bg}
                            alt="Logo"
                            height={'40px'}
                            width={'40px'}
                        />
                        <div className={logo}>Gym One</div>
                    </div>
                    <div className={nav}>
                        {
                            sections && sections.map((section, index) => (
                                <li
                                    key={index}
                                    className={navLink}
                                >
                                    <Link
                                        to={section}
                                        smooth
                                        duration={500}
                                    >
                                        {capitalizeFirstLetter(section)}
                                    </Link>
                                </li>
                            ))
                        }
                    </div>
                    <button className={btnSytle}>
                        <a
                            href="hello"
                            target='_blank'
                        >
                           
                            Youtube
                        </a>
                    </button>
                    <div
                        onClick={() => setIsMobile(!isMobile)}
                        className={faWrapper}
                    >
                        {
                            isMobile ? <FaTimes size={30} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
                {
                    isMobile && (
                        <div
                            className={mobileNav}>
                            <ul className={mobileNavUl}>
                                {
                                    sections && sections.map((section, index) => (
                                        <li
                                            key={index}
                                            className={navLink}

                                        >
                                            <Link
                                                onClick={() => setIsMobile(!isMobile)}
                                                to={section}
                                                smooth
                                                duration={500}
                                            >
                                                {capitalizeFirstLetter(section)}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Navbar;