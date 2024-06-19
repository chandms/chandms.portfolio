import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./SWEexp";
import Skills from "./Skills";
import ResearchProjects from "./ResearchExp";
import Publications from "./Publication";
import Education from "./Education";
import Interests from "./Interests";
import Teaching from "./Teaching";

export default function Home() {
  return (
    <div className=" body-font">
      <Navbar />
      <About />
      <ResearchProjects/>
      <Projects />
      <Publications/>
      <Education/>
      <Teaching/>
      <Skills />
      <Interests/>
      <Contact />
    </div>
  );
}
