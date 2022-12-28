import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Social() {
  return (
   <>
    <section className="social">
            <ul>
              <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'> <span className='iconimg'><FontAwesomeIcon icon={faFacebookF} /> </span></a></li>
              <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faInstagram} /> </span></a></li>
              <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faTwitter} /> </span></a></li>
              <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faLinkedin} /> </span></a></li>
              <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><span className='iconimg'><FontAwesomeIcon icon={faEnvelope} /> </span></a></li>
            </ul>
          </section>
   </>
  )
}

export default Social