import React from 'react'
import Contact_form from '../components/Contact_form'

const ContactUs = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  return (
    <div className='mw'>
      <div className="contactpaged">
        


          <div className="title">
            <h1>Contact Us</h1>



         
        </div>
        <Contact_form />
      </div>


    </div>
  )
}

export default ContactUs