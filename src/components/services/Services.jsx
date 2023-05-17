import React from 'react'
import './services.css'
import {BsFillCloudCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
   <section id='section'> 
   <h5>What I Offer</h5>
   <h2>Services</h2>

   <div className='container services__container'>
    <article className='service'>
      <div className='service__head'>
        <h3 >Data Documentation</h3>
      </div>

      <ul className='service__list'></ul>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
    </article>


    <article className='service'>
      <div className='service__head'>
        <h3 >Web Design</h3>
      </div>

      <ul className='service__list'></ul>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
    </article>


    <article className='service'>
      <div className='service__head'>
        <h3 >Api Documentation</h3>
      </div>

      <ul className='service__list'></ul>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <BsFillCloudCheckFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
    </article>
   </div>
   </section>
  )
}

export default Services
