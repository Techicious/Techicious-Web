import React from 'react'
import '../css/Technology.css'
import Carousel from 'better-react-carousel'





const Technology = () => {
    return (
        <>
            <div className="container technology">
                <div className="content">

                    <div className="limitwidth">
                        <Carousel  cols={1} rows={1} gap={15} mobileBreakpoint={200} showDots autoplay={3000} loop>
                        <Carousel.Item>
                          <img src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                          <Carousel.Item>
                          <img width="200px" src='https://picsum.photos/800/600?random=3' alt="a" />
                          </Carousel.Item>
                        
                                     

                        </Carousel>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Technology