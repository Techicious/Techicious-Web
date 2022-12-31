import React from 'react'
import '../css/clientparl.css'
import Title from 'react-vanilla-tilt'
import vid from '../resources/mov_bbb.mp4'
import { useEffect } from 'react'

function Clientcomponent(props) {

    var r = document.querySelector(':root');
    {
        const scrollvalue = props.scroll - props.initval;

      if ( scrollvalue< 900) {
        r.style.setProperty('--rotatex', `${0}deg`);
        r.style.setProperty('--rotatey', `${0}deg`);
        r.style.setProperty('--transformx', `${0}px`);
        r.style.setProperty('--scale', `${1}`);
        r.style.setProperty('--scrollbarwidth', `10px`);
        r.style.setProperty('--transition', `.1s ease-in-out`);
  }
      if (scrollvalue >= 900) {
        r.style.setProperty('--scrollbarwidth', `0px`);
        r.style.setProperty('--transition', `.1s ease-in-out`);
        r.style.setProperty('--rotatex', `${scrollvalue / 300 - 2}deg`);
        r.style.setProperty('--rotatey', `${-scrollvalue / 300 - 2}deg`);
        r.style.setProperty('--transformx', `${-scrollvalue / 5 + 180}px`);
        r.style.setProperty('--scale', `${.6 + scrollvalue / 2000}`);
      }
      // paused state
      if (scrollvalue >= 2700) {
        r.style.setProperty('--rotatex', `${5}deg`);
        r.style.setProperty('--rotatey', `${-9.6}deg`);
        r.style.setProperty('--transformx', `${-302}px`);
        r.style.setProperty('--scale', `${2}`);
        r.style.setProperty('--transition', `.1s ease-in-out`);
      }
      if (scrollvalue >= 2780) {
        r.style.setProperty('--rotatex', `${5 - scrollvalue / 3000}deg`);
        r.style.setProperty('--rotatey', `${-9.6 + scrollvalue / 1000}deg`);
        r.style.setProperty('--transformx', `${scrollvalue / 5 - 900}px`);
        r.style.setProperty('--scale', `${-scrollvalue / 3000 + 3}`);
        r.style.setProperty('--transition', `.1s ease-in-out`);
      }
      // paused state
      if (scrollvalue >= 5300) {
        r.style.setProperty('--transition', `.4s ease-in-out`);
        r.style.setProperty('--rotatex', `${0}deg`);
        r.style.setProperty('--rotatey', `${0}deg`);
        r.style.setProperty('--scale', `${1}`);
        r.style.setProperty('--transformx', `${0}px`);
      }
      if (scrollvalue >= 5500) {
        r.style.setProperty('--transition', `.1s ease`);
        r.style.setProperty('--rotatex', `${scrollvalue / 2000}deg`);
        r.style.setProperty('--scale', `${scrollvalue / 3000 - .7}`);
        r.style.setProperty('--transformx', `${scrollvalue / 10 - 500}px`);
  
      }
      if (scrollvalue >= 8800) {
        r.style.setProperty('--scrollbarwidth', `10px`);
      }
    }

useEffect(() => {
    var vid = document.getElementById("videop");
    vid.currentTime=(props.scroll - (props.startval+100) ) / 600;
  }, [props.scroll,props.startval])
  

  return (

    <div className="thisOne" id="fixed" style={{
        position: props.scroll > props.startval && "fixed",
        opacity: props.scroll > props.trigerval && '1',
        display:props.scroll < props.trigerval ? 'none' :  props.scroll> props.endval && 'none'
      }}>
        <Title className="titlehover" loop>
           <video id='videop'>
           <source src={vid} type="video/mp4"/>
           </video>
        </Title>
      </div>
  )
}

export default Clientcomponent