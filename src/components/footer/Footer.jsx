import React from 'react'
import './footer.css'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href='a' className='footer__logo'>SUMMARY</a>

      <ul className='permalinks'>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com" ><GrInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer
