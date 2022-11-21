import React from 'react'
import '../css/Footer.css'
import img2 from '../resources/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>         
         <footer className='border '>
            <div className="footer_content">
                <div className="s left">
                    <h1>Navigation Links</h1>
                    <ul>
                        <li><Link to="/About_Us"> About Us</Link></li>
                       
                        <li><Link to="/Solutions/IOT_Solutions"> Solution</Link></li>
                        <li><Link to="/Technology"> Technology</Link></li>
                        <li><Link to="/Contact_Us"> Contact Us</Link></li>
                       

                    </ul>
                </div>
                <div className="s center">
                    <img src={img2} alt="logo"/>
                    <p>Copyright @ Techicious 2022</p>
                </div>
                <div className="s right">
                    <h1>Connect With Us</h1>
                    <div className="data_Section">
                        <div className="p location"> <span className='iconimg'><FontAwesomeIcon icon={faMapLocation} /> </span> <p> XYZ bulinghum street, <br/> sahibabad, Ghaziabad, 201010</p></div>
                        <div className="p mail"> <span className='iconimg'><FontAwesomeIcon icon={faEnvelope} /> </span><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Techicious.reachus@gmail.com" target="_blank" rel='noreferrer'> <p>Techicious.reachus@gmail.com</p></a></div>
                        <div className="p contact" > <span className='iconimg'><FontAwesomeIcon icon={faPhone} /> </span><p><a href="tel:+919999999999"> +919999999999</a></p></div>
                    </div>
                </div>
            </div>
           </footer>

    </>
  )
}

export default Footer