import React, { useState } from 'react'
import AboutApp from './AboutApp';
import Contact from './Contact'
import PrivacyPolicy from './PrivacyPolicy';
import AboutDevloper from './AboutDevloper';
import { Social } from '../constant/social';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
  const [showAboutApp, setShowAboutApp] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showAboutDevloper, setShowAboutDeveloper] = useState(false);

  const toggleAbout = () => {
    setShowAboutApp(!showAboutApp);
    setShowContact(false);
    setShowPolicy(false);
    setShowAboutDeveloper(false);
    
  }
  const toggleContact = () => {
    setShowAboutApp(false);
    setShowContact(!showContact);
    setShowPolicy(false);
    setShowAboutDeveloper(false);

  };

  const togglePolicy = () => {
    setShowAboutApp(false);
    setShowContact(false);
    setShowPolicy(!showPolicy);
    setShowAboutDeveloper(false)
  };

  const toggleDevloper = () => {
    setShowAboutApp(false);
    setShowContact(false);
    setShowPolicy(false);
    setShowAboutDeveloper(!showAboutDevloper)
  }

  const footerContainer = `bg-black text-lime-500`;
  const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
  const name = `mt-5 md:mt-7 text-light text-yellow-400 text-center text-xl `;
  const nav = `flex justify-center items-center`;
  const navLink = `ml-3 md:mx-5 hover:text-lime-400 text:sm md:text-xl text-bold`;
  const socialMediaWrapper = `flex justify-center items-center mt-3`;
  const socialMediaIcon = `ml-4 md:mx-5 hover:text-lime-400 text-2xl`;
  const copyright = `mb-5 text-light text-yellow-400 flex flex-col md:flex-row md:gap-3 justify-center items-center`;

  return (
    <>
      <footer className={footerContainer}>
        <div className={footerWrapper}>
          <div className={name}> {Social.name}</div>
          <div className={nav}>
            <div className={navLink}>Home</div>
            <div className={navLink} onClick={toggleAbout}>About </div>
            <div className={navLink} onClick={toggleContact}>Contact </div>
            <div className={navLink} onClick={togglePolicy}>Privacy </div>
            <div className={navLink} onClick={toggleDevloper}>Developer</div>
          </div>
        </div>
      </footer >

      <div>
        {showAboutApp && <AboutApp/>}
        {showContact && <Contact />}
        {showPolicy && <PrivacyPolicy />}
        {showAboutDevloper && <AboutDevloper/>}
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