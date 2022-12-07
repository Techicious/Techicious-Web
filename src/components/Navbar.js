import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import img1 from '../resources/logo.png'
import img2 from '../resources/logo3.png'


const Navbar = () => {
    const [count, setCount] = useState(false);
 
   

   function handleclick(){
    setCount(count => !count);
   }



   let toggleClassCheck = count ? ' close':' ';
   let toggleClassCheck2 = count ? ' active':' ';

  

   
  
      
  return (
    <>
    <nav>
    <div className={`menu${toggleClassCheck}`} id="btn" onClick={handleclick}>
        <div className="upper"></div>
        <div className="middle"></div>
        <div className="lower"></div>
    </div>
    <div className="navbar">

<Link to="/">

        <div className="logo">
            <img className="logo2" src={img1} alt="logo"/>
            <img className="logo3" src={img2} alt="icon"/>
        </div>
        </Link>
       
        <div className={`links${toggleClassCheck2}`} id="menu" onClick={handleclick}>
            <ul>
                <li className='mainmenu'><Link to="/"> Home </Link></li>
            
                
                <li className='mainmenu'><Link to="/About_Us">About us </Link></li>
                <li className='mainmenu ic'><Link>Services</Link>
                <ul className="submenu">
                    <li><Link to="/Services/Design_Factory">Design Factory</Link></li>
                    <li><Link to="/Services/Converter_Factory">Converter Factory</Link></li>
                    <li><Link to="/Services/Code_Factory">Code Factory</Link></li>
                    <li><Link to="/Services/Talent_Factory">Talent Factory</Link></li>
                </ul>
                
                
                </li>
                <li className='mainmenu ic'><Link>Solutions</Link>
                <ul className="submenu">
                    <li><Link to="/Solutions/IOT_Solutions">IOT Solutions</Link></li>          
                   
                </ul>
                </li>
                <li className='mainmenu'><Link to="/Technology">Technology </Link></li>
                <li className='mainmenu'><Link to="/Contact_Us">Contact Us </Link></li>
               
            </ul>

        </div>

    </div>
</nav>


</>
    
  )
}

export default Navbar

