import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>About</h3>
                            <ul className="list-unstyled">
                                <li><a href="/about-us" className="text-light">About Us</a></li>
                                <li><a href="/privacy-policy" className="text-light">Privacy Policy</a></li>
                                <li><a href="/contact-us" className="text-light">Contact Us</a></li>
                                <li><a href="/about-developer" className="text-light">About Developer</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Social Media</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://facebook.com" className="text-light">
                                        <FaFacebook /> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" className="text-light">
                                        <FaTwitter /> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" className="text-light">
                                        <FaInstagram /> Instagram
                                    </a>
                                </li>
                                {/* Add more social media links with respective icons here */}
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Navigation</h3>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-light">Home</a></li>
                                <li><a href="/add-blog" className="text-light">Add Blog</a></li>
                                <li><a href="/top-10-blogs" className="text-light">Top 10 Blogs</a></li>
                                {/* Add more navigation links here */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='text-center p-2'>Made With Love in India By Anurag Affection </div>
        </>

    )
}

export default Footer