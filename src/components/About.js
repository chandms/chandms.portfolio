import React from "react";
import { SocialIcon } from 'react-social-icons';
import CarouselComponent from './Slides';


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="animate-bounce title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
            Hi, This is Chandrika!!
            <br className="hidden lg:inline-block" />
          </h1>
          <div className="flex justify-center">
            <p className="mb-8 mr-2 leading-relaxed">
              I am pursuing Ph.D. in Computer Science at
            </p>
            <a href="https://www.cs.purdue.edu/"><img alt="Purdue University" src="./pictures/purdue_university.png" className="border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"/></a>
          </div>
          <div className="flex justify-center">
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/cmukherj/"  className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg mr-5"  />
            <SocialIcon target="_blank" url="https://github.com/chandms" className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg mr-5"/>
            <SocialIcon target="_blank" url="https://www.facebook.com/cooleo.co.in" className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg mr-5"/>
          </div>
          <br></br>
        </div>
        <CarouselComponent/>

      </div>
    </section>
  );
}
