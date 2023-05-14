import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{VscGithub} from 'react-icons/vsc'
import{CgTwitter} from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target='_blank'><VscGithub/></a>
        <a href='https://twitter.com' target='_blank'><CgTwitter/></a>
      
    </div>
  )
}

export default HeaderSocials
