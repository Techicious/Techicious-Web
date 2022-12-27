import  React, { useEffect, useState } from 'react'
import '../css/Landingpage.css'
import SliderComp from "./SliderComp"
import Title from 'react-vanilla-tilt'

import '../css/Button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




const Landinpage = () => {


  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollVal(
        Math.abs(document.getElementById("parl").getBoundingClientRect().top)
      );
    });

    return () => {
      document.removeEventListener("scroll", () => { });
    };
  }, []);

console.log(scrollVal)
var r = document.querySelector(':root');
{
  if(scrollVal< 900){
    r.style.setProperty('--rotatex', `${0}deg`);
    r.style.setProperty('--rotatey', `${0}deg`);
    r.style.setProperty('--transformx', `${0}px`);
    r.style.setProperty('--scale', `${1}`);
    

  }
  if(scrollVal>= 900){
    r.style.setProperty('--rotatex', `${scrollVal/300 -2}deg`);
    r.style.setProperty('--rotatey', `${-scrollVal/300 -2}deg`);
    r.style.setProperty('--transformx', `${-scrollVal/5 +180}px`);
    r.style.setProperty('--scale', `${.6 + scrollVal/2000}`);
    

  }
  // paused state
  if(scrollVal>= 2400){
    r.style.setProperty('--rotatex', `${5}deg`);
    r.style.setProperty('--rotatey', `${-9.6}deg`);
    r.style.setProperty('--transformx', `${-552}px`);
    r.style.setProperty('--scale', `${2.2}`);
  }
  if(scrollVal>= 2780){
    r.style.setProperty('--rotatex', `${5 - scrollVal/3000}deg`);
    r.style.setProperty('--rotatey', `${-9.6 + scrollVal/1000}deg`);
    r.style.setProperty('--transformx', `${scrollVal/5 - 1000}px`);
    r.style.setProperty('--scale', `${ -scrollVal/3000 +3}`);
  }
  // paused state
  
  if(scrollVal >= 5300){
    r.style.setProperty('--rotatex', `${0}deg`);
    r.style.setProperty('--rotatey', `${0}deg`);
    r.style.setProperty('--scale', `${1}`);
    r.style.setProperty('--transformx', `${0}px`);
  }
  if(scrollVal >= 5500){
    r.style.setProperty('--rotatex', `${ scrollVal/2000}deg`);
    r.style.setProperty('--scale', `${scrollVal/3000 - .7 }`);
    r.style.setProperty('--transformx', `${ scrollVal/30}px`);

  }
}

  return (

    <>
      <div className="parallax" id='parl'>
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

          <div className="container lowh">
            <div className="content">
              <div className="leftcontent">
                <p>WELCOME,</p>
                <h1>Innovative Solutions Focused on Your Success</h1>
                <p><span className="space">INNOVATIVE. OPTIMIZE. AUTOMATE</span></p>


              </div>


            </div>

          </div>

          <SliderComp />
        </section>
        {/* ------------Paralax effect----------- */}

{/* for top scroll val of prev will be the postion scroll val of next one
 for top incriment mini addition of 3030
 limit value must be grater than 3030+
 diffrence between starting val and main val should be 800 min to 840 max from prev one it will change to scaling animation
*/}

<div className="thisOne" id="fixed" 
          style={{
            position: scrollVal > 800 && "fixed",
            top: scrollVal < 8800 ? 0 : -scrollVal + 1000,
      
            transition: '.4s ease-in-out',
            opacity: scrollVal > 181 && '1'
          }}
        >

<Title className="titlehover">

</Title>

        

        </div>


      </div>
    </>
  )
}

export default Landinpage

