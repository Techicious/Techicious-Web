import React,{useState} from 'react'

import './index.css'

import Footer from './components/Footer'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import {  Routes,Route } from 'react-router-dom'
import About from './pages/About'
import DesignFactory from './pages/Services/DesignFactory'
import ConvertorFactory from './pages/Services/ConvertorFactory'
import CodeFactory from './pages/Services/CodeFactory'
import TalentFactory from './pages/Services/TalentFactory'
import IOTSolutions from './pages/Solutions/IOTSolutions'
import TechnologyPage from './pages/TechnologyPage'
import ContactUs from './pages/ContactUs'





const Content = () => {

  const [count2, setCount2] = useState(false);
 



 function handleclick2(){
  setCount2(count2 => ! count2);
 }


 let thme = count2 ? ' light':' ';


  return (
   <>

<div className={`theme${thme}`} onClick={handleclick2}>
                    <div className="tgle"></div>
                </div>
    <Navbar/>
        
       
       
          <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route exact path='/Techicious-Web' element={<Homepage/>}/>
      <Route exact path="/About_Us" element={<About/>} />
      <Route exact path="/Services/Design_Factory" element={<DesignFactory/>} />
      <Route exact path="/Services/Converter_Factory" element={<ConvertorFactory/>} />
      <Route exact path="/Services/Code_Factory" element={ <CodeFactory/> } />
      <Route exact path="/Services/Talent_Factory" element={<TalentFactory/>} />
      <Route exact path="/Solutions/IOT_Solutions" element={<IOTSolutions/>} />
      <Route exact path="/Technology" element={<TechnologyPage/>} />
      <Route exact path="/Contact_Us" element={<ContactUs/>} />
  
          </Routes>
       
        
      
       
      <Footer/>
        
    
    </>
  )
}

export default Content