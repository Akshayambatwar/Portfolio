import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>AKSHAY</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href='https://in.linkedin.com/in/akshay-ambatwar-09b043194' target="_blank"><AiFillLinkedin style={{fontSize:"35px" }}/></a>
      </div>
    </footer>
  )
}

export default Footer