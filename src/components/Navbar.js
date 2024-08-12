import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (

    <header className=" bg-slate-200 md:sticky lg:sticky top-0 z-10">
      <div className=" container place-content-evenly mx-auto flex flex-wrap p-5 md:flex-row items-center">
        <div className="title-font font-medium text-rose-800 mb-4 md:mb-0">
          <a href="#about" className=" text-xl border-0 py-1 px-3 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Chandrika Mukherjee
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"> 
          <a href="#research" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Research
          </a>
          <a href="#projects" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            SWE
          </a>
          <a href="#publication" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Publication
          </a>
          <a href="#education" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Education
          </a>
          <a href="#teaching" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Teaching
          </a>
          <a href="#skills" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Skills
          </a>
          <a href="#interests" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Interests
          </a>
          <a target="_blank" rel="noreferrer" href="./pdfs/ChandrikaMukherjee.pdf" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
          Resume
          </a>
          <a target="_blank" rel="noreferrer" href="https://chandms.github.io/blogs/" className="mr-5 border-0 py-1 px-2 hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
          Blogs
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center border-0 py-1 px-2 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
