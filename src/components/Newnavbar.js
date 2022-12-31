import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/newnavbar.css"
import img1 from '../resources/logo.png'
import img2 from '../resources/logo3.png'
import df from '../resources/designfactory.png'
import cf from '../resources/codefactory.png'
import cvf from '../resources/converterfactory.png'
import tf from '../resources/talentfactory.png'
import { faArrowCircleDown, faArrowDown, faArrowDown19, faArrowDownAZ, faArrowPointer, faArrowUp, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const Newnavbar = () => {
    const [count, setCount] = useState(false);
    const [count2, setCount2] = useState(false);
    const [count3, setCount3] = useState(false);



    function handleclick() {
        setCount(count => !count);
    }
    function handleclick2() {
        setCount2(count2 => !count2);
    }
    function handleclick3() {
     
        setCount3(count3 => !count3);
    }


    let toggleClassCheck = count ? ' close' : ' ';
    let toggleClassCheck2 = count ? ' active' : ' ';
    let toggleClassCheck3 = count2 ? ' openmenue' : ' ';
    let toggleClassCheck4 = count3 ? ' openmenue' : ' ';






    return (
        <>
            <nav>
                <div className={`menu${toggleClassCheck}`} id="btn" onClick={handleclick}>
                    <div className="upper"></div>
                    <div className="middle"></div>
                    <div className="lower"></div>
                </div>
                <div className={`navbarn${toggleClassCheck2}`} id="menu">
                <Link to="/"><section className="logosection">
                        <img src={img1} alt="" />
                    </section></Link> 
                    <section className="menusection">
                        <div className="main_menue"><span><Link to="/"> Home </Link></span></div>
                        <div className="main_menue"><span><Link to="/About_Us">About us </Link></span></div>
                        <div className={`main_menue${toggleClassCheck3}`} id="main_menue" onClick={handleclick2}><span><a href="#"> Services</a></span><div className='sub_menue'>
                            <div className="menubox">
                                <Link to="/Services/Design_Factory"><div className="liitemscards">
                                    {/* <div className="image"><img src={df} alt="df" /></div> */}
                                    <div className="title">Design Factory</div>
                                </div></Link>
                                <Link to="/Services/Converter_Factory">
                                <div className="liitemscards">
                                {/* <div className="image"><img src={cf} alt="df" /></div> */}
                                    <div className="title">Converter Factory</div>
                                </div>
                                </Link>
                                <Link to="/Services/Code_Factory">
                                <div className="liitemscards">
                                {/* <div className="image"><img src={cvf} alt="df" /></div> */}
                                    <div className="title">Code Factory</div>
                                </div>
                                </Link>
                                <Link to="/Services/Talent_Factory">
                                <div className="liitemscards">
                                {/* <div className="image"><img src={tf} alt="df" /></div> */}
                                    <div className="title">Tallent Factory</div>
                                </div>
                                </Link>
                            </div>
                        </div></div>
                        <div  className={`main_menue${toggleClassCheck4}`} id="main_menue" onClick={handleclick3}><span><a href="#"> <p>Solutions</p>
                        
                            </a> </span>
                        <div className="sub_menue">
                            <div className="menubox">
                            <Link to="/Solutions/IOT_Solutions"> <div className="liitemscards">
                                    {/* <div className="image"><img src={df} alt="df" /></div> */}
                                    <div className="title">IOT Solutions </div>
                                </div></Link>
                            </div>
                            </div>
                        </div>
                        <div className="main_menue"><span><Link to="/Technology">Technology</Link></span></div>
                        <div className="main_menue"><span><Link to="/Contact_Us">Contact Us </Link></span></div>
                    </section>
                    <section className="socialsection">
                     <div className="socialhover"><span> <FontAwesomeIcon icon={faShareNodes} />  </span>
                   <ul className="followicons">
                        <li className="followicon_items">fb</li>
                        <li className="followicon_items">fb</li>
                      
                        </ul>
                       
                        </div>
                        </section>
                </div>
            </nav>


        </>

    )
}

export default Newnavbar

