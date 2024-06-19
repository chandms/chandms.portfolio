import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
      <div className="max-w-lg h-max">
          <Carousel infiniteLoop useKeyboardArrows autoPlay interval={2000}>
              <div>
              <img src="./pictures/pr2.jpeg" className="object-cover" alt='pic1' />
              </div>
              <div>
              <img src="./pictures/group.jpeg"  className="object-cover" alt='pic2'/>
              </div>
              <div>
              <img src="./pictures/inst.png" className="object-cover" alt='pic3'/>
              </div>
              <div>
              <img src="./pictures/hsbc_img.jpeg" className="object-cover" alt='pic4'/>
              </div>
          </Carousel>
      </div>
  );
}