import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assert/me.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
    <div className=".container header_container">
      <h5>Hello I'm</h5>
      <h1>Dorcas Adeweh Abang</h1>
      <h5 className="text-light">Software Engineer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='me'>
        <img src={ME} alt="me"/>
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>



    </div>
  
   </header>
  )
}

export default Header
