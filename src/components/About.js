import React from "react";
import { SocialIcon } from 'react-social-icons';


export default function About() {
  return (
    <section id="about">
      <div className=" grid grid-cols-2 gap-0 px-10 py-20 justify-items-center ">
      <div className="flex flex-col w-4/5 h-3/4 " >
      <img src="./pictures/pr2.jpeg" alt="profile"></img>
      <br></br>
          <div className="flex justify-center">
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/cmukherj/"  className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 rounded text-lg mr-5"  />
            <SocialIcon target="_blank" url="https://github.com/chandms" className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg mr-5"/>
            <SocialIcon target="_blank" url="https://www.facebook.com/cooleo.co.in" className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg mr-5"/>
          </div>
      </div>
        <div className="justify-center">
          <p className="title-font text-lg ">
            I am a Ph.D. student in the <a target="_blank" rel="noreferrer" href="https://www.cs.purdue.edu/" className="text-blue-800">
            Department of Computer Science at Purdue University</a>, 
            advised by Professor <a a target="_blank" rel="noreferrer" className="text-blue-800" href="https://beerkay.github.io/">
            Z. Berkay Celik</a> and working with the <a target="_blank" rel="noreferrer" className="text-blue-800" 
            href="https://pursec.cs.purdue.edu/">PurSec Lab</a>. My research focuses on leveraging system design, 
            machine learning, signal processing, and user study methods to advance the usable security and privacy of extended reality (XR) systems.
            <br></br>
            <br></br>
            I designed a secure group pairing protocol for mixed 
            reality headsets (e.g. - HoloLens2) by leveraging multi-modal sensors 
            within an open-shared environment. I am currently working on evaluating effects of dark 
            patterns in XR systems. My future research plans include exploring the use of 
            large language models (LLMs) and various side-channel attacks in XR.
          </p>
        </div>

      </div>
    </section>
  );
}
