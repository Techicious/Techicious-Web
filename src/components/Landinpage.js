import React from 'react'
import '../css/Landingpage.css'


import '../css/Button.css'
import img1 from '../resources/homepage-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Landinpage = () => {
   

   

  return (
    <section className="landingpage">
       

    <section className="social">
        <ul>
            <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'> <span className='iconimg'><FontAwesomeIcon icon={faFacebookF} /> </span></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faInstagram} /> </span></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faTwitter} /> </span></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faLinkedin} /> </span></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faEnvelope} /> </span></a></li>

        </ul>
    </section>

    <div className="container">
        <div className="content">
            <div className="leftcontent">
                <p>WELCOME,</p>
                <h1>Innovative Solutions Focused on Your Success</h1>
                <p><span className="space">INNOVATIVE. OPTIMIZE. AUTOMATE</span></p>

                <div className="btnnew">
                <Link to="/About_Us">

                    <div className="wrappers">
                        <div className="buttons">
                            <p>Read More</p>
                        </div>
                        <div className="buttons2">
                        Read More
                        </div>
                        <div className="buttons3">
                        Read More
                        </div>
                    </div>
                    </Link>
                   
                </div>
            </div>
           
            <div className="rightcontent">
                <img src={img1} alt="banner"/>
            </div>
            </div>
      
    </div>
</section>
  )
}

export default Landinpage