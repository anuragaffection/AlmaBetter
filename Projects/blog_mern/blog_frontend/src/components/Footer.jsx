import React, { useState } from 'react'
import Contact from './Contact'
import PrivacyPolicy from './PrivacyPolicy';
import { Social } from '../constant/social';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const footerContainer = `bg-black text-lime-500`;
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const name = `mt-5 md:mt-7 text-light text-yellow-400 text-center text-xl `;
const nav = `flex justify-center items-center`;
const navLink = `ml-3 md:mx-5 hover:text-lime-400 text:sm md:text-xl text-bold`;
const socialMediaWrapper = `flex justify-center items-center mt-3`;
const socialMediaIcon = `ml-4 md:mx-5 hover:text-lime-400 text-2xl`;
const copyright = `mb-5 text-light text-yellow-400 flex flex-col md:flex-row md:gap-3 justify-center items-center`;

function Footer() {
  const [showContact, setShowContact] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const toggleContact = () => {
    setShowPolicy(false);
    setShowContact(!showContact);

  };

  const togglePolicy = () => {
    setShowContact(false);
    setShowPolicy(!showPolicy);
  };




  return (
    <>
      <footer className={footerContainer}>
        <div className={footerWrapper}>
          <div className={name}> {Social.name}</div>
          <div className={nav}>
            <div className={navLink}>Home</div>
            <div className={navLink}>About </div>
            <div className={navLink} onClick={toggleContact}>Contact </div>
            <div className={navLink} onClick={togglePolicy}>Privacy </div>
            <div className={navLink}>Developer</div>
          </div>
        </div>
      </footer >

      <div>
        {showContact && <Contact />}
        {showPolicy && <PrivacyPolicy />}
      </div>

      <div className={footerContainer}>
        <div className={footerWrapper}>
          <div className={socialMediaWrapper}>
            <a className={socialMediaIcon} href={Social.github} target='_blank'><FaGithub /></a>
            <a className={socialMediaIcon} href={Social.linkedin} target='_blank'><FaLinkedin /></a>
            <a className={socialMediaIcon} href={Social.youtube} target='_blank'><FaYoutube /></a>
            <a className={socialMediaIcon} href={Social.twitter} target='_blank'><FaTwitter /></a>
            <a className={socialMediaIcon} href={Social.facebook} target='_blank'><FaFacebook /></a>
            <a className={socialMediaIcon} href={Social.instagram} target='_blank'><FaInstagram /></a>
          </div>
          <div className={copyright}>
            <span>&copy; 2023 </span>
            <span>All rights reserved.</span>
            <span>A Family of Love & Affection. </span>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer