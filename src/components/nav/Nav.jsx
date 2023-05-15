import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookAlt} from 'react-icons/bi'
import {GrServices} from 'react-icons/gr'
import {TbMessage} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><FcHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active': ''}><FaUserAlt/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active': ''}><BiBookAlt/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className = {activeNav === '#services' ? 'active': ''}><GrServices/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active': ''}><TbMessage/></a>
    </nav>
  )
}

export default Nav
