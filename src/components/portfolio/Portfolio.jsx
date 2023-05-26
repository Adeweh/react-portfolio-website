import React from 'react'
import './portfolio.css'
import IMG1 from '../../assert/IMG1.webp'
import IMG2 from '../../assert/IMG2.webp'
import IMG3 from '../../assert/IMG3.webp'
import IMG4 from '../../assert/IMG4.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://dribble.COM/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank ' rel="noreferrer">Github</a>
          <a href='https://dribble.COM/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://dribble.COM/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://dribble.COM/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>

        </article>
      </div>
    </section>
   
  )
}

export default Portfolio
