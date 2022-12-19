import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/SWEexp";
import Skills from "./components/Skills";
import ResearchProjects from "./components/ResearchExp";
import Publications from "./components/Publication";
import Education from "./components/Education";
import Interests from "./components/Interests";

export default function App() {
  return (
    <main className="text-emerald-900 bg-pink-50 body-font">
      <Navbar />
      <About />
      <Projects />
      <ResearchProjects/>
      <Publications/>
      <Education/>
      <Skills />
      <Interests/>
      <Contact />
    </main>
  );
}
