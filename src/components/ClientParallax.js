import '../css/clientparl.css'
import Title from 'react-vanilla-tilt'
import vid from '../resources/mov_bbb.mp4'
import { useEffect} from 'react'


const ClientParallax = (props) => {
  
useEffect(() => {
  var vid = document.getElementById("videop");
  vid.currentTime=(props.scroll - 900 )/800;
 
}, [props.scroll])




  return (
    <>
        <Title className="titlehover" width="100%" height ="100%" loop>
           <video id='videop'>
           <source src={vid} type="video/mp4"/>
           </video>
        </Title>
     </>
  )
}

export default ClientParallax