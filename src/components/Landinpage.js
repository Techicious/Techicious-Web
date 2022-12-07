import { useEffect, useState } from 'react'
import '../css/Landingpage.css'
import SliderComp from "./SliderComp"

import '../css/Button.css'
import img1 from '../resources/homepage-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import img2 from "../resources/sm.png"
import img3 from "../resources/lr.png"


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
  console.log(scrollVal);


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

                {/* <div className="btnnew">
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

              </div> */}
              </div>

              {/* <div className="rightcontent">
              <img src={img1} alt="banner" />
            </div> */}
            </div>

          </div>

          <SliderComp />
        </section>
        {/* ------------Paralax effect----------- */}

        <div className="thisOne" id="fixed"
          style={{
            position: scrollVal > 800 && "fixed",
            top: scrollVal < 4818 ? 0 : -scrollVal + 1000,
            background: scrollVal > 181 && '#fff',
            transition: '.4s ease-in-out',
            opacity: scrollVal > 181 && '1'
          }}
        >
          <div className="contentparalax" 
          style={{
            display: scrollVal > 2000 && 'none'
           
          }}>
            <div className="uppert">
              <h1>Navigation</h1>
              <p>Mapbox provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences.</p>
            </div>
            <div className="lowert">
              <img src={img2} alt="s"
              style={{
                transform: scrollVal > 1272 && `translateX(${scrollVal * .35}px)`
               
              }}
              />
              <img src={img3}  alt="s" 
              style={{
                transform: scrollVal > 960 && `translateY(${-scrollVal * .25}px) `
              }}
              />


            </div>
          </div>

          <div className="contentparalax" 
          style={{
            display: scrollVal < 2030 && 'none'
           
          }}>
            <div className="uppert">
              <h1>new1</h1>
              <p>Mapbox provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences.</p>
            </div>
            <div className="lowert">
              <img src={img2} alt="s"
              style={{
                transform: scrollVal> 3000 && `translateX(${scrollVal * .20 -100}px)`
               
              }}
              />
              <img src={img3}  alt="s" 
              style={{
                transform: scrollVal> 2850 && `translateY(${-scrollVal * .15}px) `
              }}
              />


            </div>
          </div>
          {/* <h1 className='Heading' style={{
          transform: scrollVal < 1800 ? `scale(${scrollVal / 100})` : 'scale(0)'
        }}>CASE1 </h1>
        <img
          src={
            "https://www.svgrepo.com/show/429859/forest-landscape-mountain.svg"
          }
          style={{
            transform: scrollVal < 2900 ? `translateX(${-scrollVal * .25 + 900}px) ` : `translateX(${-scrollVal * .25 + scrollVal * .34 }px)` 
          }}

        /> */}
        </div>
      </div>
    </>
  )
}

export default Landinpage