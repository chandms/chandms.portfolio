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

export default function Home() {
  return (
    <div className="text-emerald-900 bg-pink-50 body-font">
      <Navbar />
      <About />
      <Projects />
      <ResearchProjects/>
      <Publications/>
      <Education/>
      <Skills />
      <Interests/>
      <Contact />
    </div>
  );
}
