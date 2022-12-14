import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { faCog} from '@fortawesome/free-solid-svg-icons'

import '../css/intro.css'
import { Link } from 'react-router-dom'
const Intro = () => {
    useEffect(() => {
    
        var all = document.querySelectorAll('.common');
       
     
    }, []);
    return (
        <div className="common container border">
            <div className="content">
                <div className='Intro'>
                    <div className='Title'>
                      
                        <h1>QUICK INTRODUCTION</h1>
                    </div>

                    <p>Welcome to the world of VAPPRTECH, we help you imagine, implement and accelerate your digital journey by creating applications you desire. Whether, you are looking to craft the most attractive and easily navigable website or focus on mobile app development services, our team will venture into your thought process and turn that into reality.
                    </p>

                    <div className='button_type3'>
              <div className='wrapper'>
              <div className='iconimg'><FontAwesomeIcon icon={faArrowAltCircleRight} /> </div>
              <div className='readmore'><Link to='/About_Us'> Readmore</Link></div>
         </div>
         </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Intro