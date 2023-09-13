import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa'
import image from '../assets/discord.png';


export default function Navbar() {

    const state = useSelector((state) => state.handleCart);

    return (

        <div
            className='navbar'>

            <nav
                className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">

                <div
                    className="container">

                    <div
                        className="img">

                        <a
                            href="https://www.youtube.com/anuragaffection"
                            target='blank'>

                            <img
                                src={image}
                                alt="Anurag Affection"
                            />
                        </a>
                    </div>


                    <NavLink
                        className="navbar-brand fw-bold fs-4"
                        to="/">
                        AA Collection

                    </NavLink>

                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>

                        <span
                            className='navbar-toggler-icon'>
                        </span>

                    </button>


                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'>

                        <ul
                            className='navbar-nav mx-auto mb-2 mb-lg-0'>


                            <li
                                className='nav-item'>

                                <NavLink
                                    className='nav-link fw-bold active'
                                    aria-current='page'
                                    to='/'>
                                    Home
                                </NavLink>

                            </li>


                            <li
                                className='nav-item'>

                                <NavLink
                                    className='nav-link fw-bold'
                                    aria-current='page'
                                    to='/products'>
                                    Products
                                </NavLink>

                            </li>


                            <li
                                className='nav-item'>

                                <NavLink
                                    className='nav-link fw-bold'
                                    aria-current='page'
                                    to='/about'>
                                    About
                                </NavLink>

                            </li>


                            <li
                                className='nav-item'>

                                <NavLink
                                    className='nav-link fw-bold'
                                    aria-current='page'
                                    to='/contact'>
                                    Contact
                                </NavLink>

                            </li>


                        </ul>


                        <div
                            className="buttons">


                            <NavLink
                                to='/login'
                                className='btn btn-outline-dark'>

                                <FaSignInAlt className='me-1'/>

                                Login

                            </NavLink>



                            <NavLink
                                to='/register'
                                className='btn btn-outline-dark ms-2'>

                                <FaUserPlus className='me-1'/>
                            
                                Register

                            </NavLink>



                            <NavLink
                                to='/cart'
                                className='btn btn-outline-dark ms-2'>

                                <FaShoppingCart className='me-1'/>
                                

                                Cart ({state.length})

                            </NavLink>

                        </div>

                    </div>
                </div>

            </nav>

        </div>

    )
}
