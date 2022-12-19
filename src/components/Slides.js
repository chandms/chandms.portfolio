import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
      <div className="carousel-wrapper lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Carousel infiniteLoop useKeyboardArrows autoPlay interval={2000}>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="./pr2.jpeg" className="object-cover object-center rounded " alt='pic1' />
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="./inst.png"  className="object-cover object-center rounded "  alt='pic2'/>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img src="./profile_pic.jpg" className="object-cover object-center rounded " alt='pic3'/>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img src="./pr1.jpeg" className="object-cover object-center rounded " alt='pic4'/>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="./pr3.jpeg"  className="object-cover object-center rounded " alt='pic5'/>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="./hsbc.png"  className="object-cover object-center rounded " alt='pic6'/>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="./home.jpeg"  className="object-cover object-center rounded " alt='pic7'/>
              </div>
          </Carousel>
      </div>
  );
}