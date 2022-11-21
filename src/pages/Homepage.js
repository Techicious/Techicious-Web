import React from 'react'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import Contactform from '../components/Contact_form'
import Technology from '../components/Technology'
import Intro from '../components/Intro'
import Infohelps from '../components/Info_helps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sdata from '../components/Showcasedata'
import Sdata2 from '../components/Imagedata'
import Landinpage from '../components/Landinpage'
import ShowcaseCard from '../components/Showcase_Card'

const Homepage = () => {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
    function Ncard (val){
        return (
       
        <ShowcaseCard
                key={val.id} 
               
                title={val.title}
                link={val.link}
               
             />
           );
    }
    
    function Ncard2 (val1){
      return (
     
      <Infohelps
              key={val1.id} 
              title={val1.title}
              names={val1.names}
            
           />
         );
    }

  return (
    <>
    <Landinpage />
        <Intro/>
        <div className='showcasewrapper border'> 
        <div className='Title'>
                        <span className='iconimg'><FontAwesomeIcon icon={faCog} /> </span>
                        <h1>WHERE WE CAN HELP </h1>
        </div>
        <div className='showcase_row info_help_row'>                  
           {Sdata2.map(Ncard2)}
        </div>
        </div>

              <div className='showcasewrapper border' id='Services'> 
              <div className='Title'>  <h1>What We Offer</h1>
              <p>We are here to help you in designing and building digital products and platforms with data and cloud as our primary points. For that, we have addressed the best cutting-edge technologies.</p>
              </div>
            
                        <div className='showcase_row'>
                                  
                                  {Sdata.map(Ncard)}
                                  </div>
               </div>
              <Technology/>
             <Contactform/>
    </>
  )
}

export default Homepage