import React from 'react'
import img1 from '../resources/contact.png'
import '../css/contact_form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact_form = () => {
  return (
    <>
 
          <div className="container contactcontainer">
          <section className='form'>
            <div className="contact_form">
               <div className="contactInfo">
                <div>
                  <h2>Contact Info</h2>
                  <ul className="info">
                    <li>
                     <span className='iconimg'><FontAwesomeIcon icon={faMapLocation} /> </span>
                    <span>XYZ bulinghum street, <br/> sahibabad, Ghaziabad, 201010</span>
                    </li>
                    <li> 
                      <span className='iconimg'><FontAwesomeIcon icon={faEnvelope} /> </span>
                    <span>Techicious.reachus@gmail.com</span>
                    </li>
                    <li>
                    <span className='iconimg'><FontAwesomeIcon icon={faPhone} /> </span>
<span>+919999999999</span>
                    </li>
                  </ul>
                </div>

                <ul className='graphics'>
                  <li><img src={img1} alt="" /></li>
                </ul>
               </div>
               <div className="contactForm">
                <h2>Send a Message</h2>
                <div className="formbox">
                  <div className="inputbox w50">
                    <input type="text" required />
                    <span>First Name</span>
                  </div>
                  <div className="inputbox w50">
                    <input type="text" required />
                    <span>Last Name</span>
                  </div>
                  <div className="inputbox w50">
                    <input type="email" required />
                    <span>Email Address</span>
                  </div>
                  <div className="inputbox w50">
                    <input type="text" required />
                    <span>Mobile Number</span>
                  </div>
                  <div className="inputbox w100">
                  <textarea required></textarea>
                    <span>Write your message here...</span>
                  </div>
                  <div className="inputbox w100">
                  <div className="btnnew">
                    <div className="wrappers">
                        <div className="buttons">
                            <p>Send</p>
                        </div>
                        <div className="buttons2">
                            Send
                        </div>
                        <div className="buttons3">
                           Send
                        </div>
                    </div>
                </div>
                  </div>

                </div>
               </div>
            </div>
            </section>
          </div>
     
    </>
  )
}

export default Contact_form