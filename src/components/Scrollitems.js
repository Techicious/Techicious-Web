import React from 'react'
import Carousel from 'better-react-carousel'

const Scrollitems = (props) => {
   
  return (
    <>
   <Carousel.Item>
     <img  src={props.link} />
    </Carousel.Item>
   </>
  )
}

export default Scrollitems