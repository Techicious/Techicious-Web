import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCog} from '@fortawesome/free-solid-svg-icons'

import '../css/intro.css'
import { Link } from 'react-router-dom'
const Intro = () => {
    return (
        <div className="container border">
            <div className="content">
                <div className='Intro'>
                    <div className='Title'>
                        <span className='iconimg'><FontAwesomeIcon icon={faCog} /> </span>
                        <h1>QUICK INTRODUCTION</h1>
                    </div>

                    <p>Welcome to the world of VAPPRTECH, we help you imagine, implement and accelerate your digital journey by creating applications you desire. Whether, you are looking to craft the most attractive and easily navigable website or focus on mobile app development services, our team will venture into your thought process and turn that into reality.
                    </p>

                    
                    <div className="btnnew">
                        <Link to="/About_Us">
                        
                    <div className="wrapper">
                        <div className="button">
                            Read More
                        </div>
                        <div className="button2">
                            Read More
                           
                        </div>
                        <div className="button3">
                        Read More

                        </div>
                    </div>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Intro