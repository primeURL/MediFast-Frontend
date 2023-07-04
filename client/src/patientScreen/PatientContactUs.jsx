import React from 'react'
import '../patientStyles/patientContact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const PatientContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h64bcha', 'template_ep2rzpy', form.current, 'Ukyc0VEE2f4tmkvjB')
    e.target.reset()
  };
  return (
    <section className='section'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>xyz@gmail.com</h5>
            <a href="mailto:chaudharyaakash329@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Username</h5>
            <a href="https://m.me/aakash.c.4508" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+912345684043</h5>
            <a href="https://api.whatsapp.com/send?phone=6206074227" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default PatientContactUs