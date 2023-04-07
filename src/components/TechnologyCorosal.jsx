import React from "react";

import Carousel from "better-react-carousel";

const Technology = () => {
  const scrolldata = [
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
    { imgUrl: "https://picsum.photos/800/600?random=3", alt: "imageShowcase" },
  ];
  return (
    <>
      <Carousel
        cols={4}
        rows={1}
        mobileBreakpoint={200}
        showDots
        autoplay={3000}
        loop
      >
        {scrolldata.map((item, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img width="200px" src={item.imgUrl} alt={item.alt} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Technology;
