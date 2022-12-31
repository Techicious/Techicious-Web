import React from 'react'
import '../css/Showcase.css'
import '../css/Button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Showcase_Card = (props) => {

 
  return (
    <section className="showcase">
    <div className="cardwrapper">
     <div className="icon">
         <div className="hexagon"
id="hexagon">
</div>
     </div>
     <div className="showcard">
        
         <div className="heading">
             <h1>{props.title}</h1>
         </div>
         <div className='button_type3'>
              <div className='wrapper'>
              <div className='iconimg'><FontAwesomeIcon icon={faArrowAltCircleRight} /> </div>
              <div className='readmore'><Link to={`/Services/${props.link}`}> Readmore</Link></div>
         </div>
         </div>
         


     </div>
    </div>
 </section>
  )
}

export default Showcase_Card
