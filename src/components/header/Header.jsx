import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/Me.png'
const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Akshay Ambatwar</h1>
       <h5 className="text-light">
         Software Engineer
       </h5>
       <CTA/>
       <div className="me">
         <img src={ME} alt="" style={{marginLeft:"-20px"}}/>
       </div>
     </div>
     <a href='#contact' className='scroll__down'>Scroll Down</a>
   </header>
  )
}

export default Header