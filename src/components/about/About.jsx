import React from 'react'
import './about.css'
import ME from '../../assert/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='About'/>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ Years Working</small>
          </article>
          <article className='about__card'>
          <VscFolderActive className='about__icon'/>
          <h5>Projects</h5>
          <small>40+ Completed Projects</small>
          </article>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus ut a repudiandae molestias voluptatum laborum magnam non reiciendis? Aut est, quia cupiditate numquam error modi rerum consectetur cumque voluptas!
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>


      </div>
    </div>
    </section>
    
    
  )
}

export default about
