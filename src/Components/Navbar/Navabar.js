import React from 'react'
import './Navbar.css'

export const Navabar = () => {
  return (
   <>
    <div className="n-wrapper">
    <div className="n-left">
      <div className="n-name">Chandan</div>
      <span>toggle</span>
    </div>
    <div className="n-right">
      <div className="n-list">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <button className="button n-button">Contact</button>
    </div>

   </div>
   </>
  )
}
