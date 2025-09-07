import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sit eligendi nam dignissimos repellat autem quae! Facere tempora fugiat amet quam, assumenda, quia deleniti veritatis odit beatae placeat suscipit praesentium.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privary Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9696-167675</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>   
      <hr/>
      <p className='footer-copyright'>Copyright 2025 Tomato.com - All Rights Reserved.</p>   
    </div>
  )
}

export default Footer
