import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiWhatsappLine} from 'react-icons/ri'

import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pgxfqpn', 'template_noom3kr', form.current, '91-8Wf-XXiHc1m9od')
  };
  

  return (
    <section id="contact"> 
    <h5>Get In Touch</h5>
    <h2>Contact Us</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineMail/>
          <h4>Email</h4>
          <h5>ambatwarakshay@gmail.com</h5>
          <a href='mailto:ambatwarakshay@gmail.com' target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <RiWhatsappLine/>
          <h4>Whatsapp</h4>
          <h5>8956777424</h5>
          <a href='https://wa.me/918956777424' target="_blank">Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea  name="message" rows="7" placeholder='Your Message' required/>
        <button type="submit" className="btn btn-primary"> Send Message</button> 
      </form>
    </div>
  
    </section>
  )
}

export default Contact