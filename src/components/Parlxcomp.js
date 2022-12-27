
import img3 from "../resources/lr.png"
import img4 from "../resources/2222.jpg"


const Parlxcomp = (props) => {
 

    return (
      <>
    <div className="contentparalax">
            <div className="uppert">
              <h1>Navigation</h1>
              <p>Mapbox provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences.</p>
            </div>
            <div className="lowert">
            
              <img src={img3}  alt="s" 
              style={{
                transform: props.scrollValue > props.startimgval && `scale(${(props.scrollValue - props.startimgval) *.005 + 1})`
              }}
              />
              <div className="dummyimage"
              style={{
                opacity: props.scrollValue > props.value && '1',
                display:props.scrollValue>props.limitval && 'none'
              }}
              >
             <img src={img4} alt="" 
               style={{
                minWidth:'100%',
                height:'100%',
                transform: props.scrollValue > props.value + 400 && 'translateX(-100%) scale(0.9)',
                transition:'.4s ease-in-out'
              }}
             />

             <img src={img4} alt="" 
               style={{
                minWidth:'100%',
                height:'100%',
                transform: props.scrollValue > props.value + 400 ? (props.scrollValue>props.value + 800? "translateX(-200%) scale(0.9)" : "translateX(-100%)") : 'translateX(0%)',
                transition:'.4s ease-in-out'

              }}
             />

              <img src={img4} alt="" 
               style={{
                minWidth:'100%',
                height:'100%',
                transform: props.scrollValue > props.value + 800 ? (props.scrollValue>props.value +1200? "translateX(-300%) scale(0.9)" : "translateX(-200%)") : 'translateX(-100%)',
                transition:'.4s ease-in-out'

              }}
             />
             
              <img src={img4} alt="" 
               style={{
                minWidth:'100%',
                height:'100%',
                transform: props.scrollValue > props.value + 1200 ? (props.scrollValue>props.value + 1600? "translateX(-400%) scale(0.8)" : "translateX(-300%)") : 'translateX(0%)',
                transition:'.4s ease-in-out'

              }}
             />
             <img src={img4} alt="" 
               style={{
                minWidth:'100%',
                height:'100%',
                transform: props.scrollValue > props.value + 1600 ? (props.scrollValue>props.value +2200? "translateX(-500%) scale(0.8)" : "translateX(-400%)") : 'translateX(0%)',
                transition:'.4s ease-in-out'

              }}
             />
             
           

              </div>


            </div>
          </div>

         
      </>
    )
  }
  
  export default Parlxcomp;
  