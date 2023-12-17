import React from 'react'
import './Navbar.css'
import Services from '../Services/Services'


export const Navabar = () => {
  return (
   <>
    <div className="n-wrapper" id='home'>
    <div className="n-left">
      <div className="n-name">Chandan</div>
      {/* <Toggle/> */}
    </div>
    <div className="n-right">
      <div className="n-list">
        <ul>
          <a href='#home'>Home</a>
          <a href='#services'>Services</a>
          <a href='#works'>Skills</a>
          <a href='#portfolio'>Projects</a>
          <a href='#testimonial'>Testimonials</a>
        </ul>
      </div>
      <button className="button n-button">Contact</button>
    </div>

   </div>
   </>
  )
}
