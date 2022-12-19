import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import CustCard from "./CustCard";
import Collapsible from 'react-collapsible';
import { ArrowsExpandIcon} from "@heroicons/react/solid";

function OutlineCollapse(props){
  return (
    <div>
    <div className="container px-5 py-10 mr-auto mt-auto mb-auto ml-20 text-center lg:px-40">
      <div className="flex">
      <h1 className="mr-2 text-white font-mono text-2xl">{props.title}</h1>
      <div>
        <img
          style={{ width: props.width + "px", height: props.height}}
          src={props.image}
          alt="Logo"
        />
      </div>
      </div>
    </div>
    <p className="styleCardTitle">{props.location}</p>
    <p className="styleCardTitle">{props.date}</p>
    <p className="styleDescription">{props.description}</p>
    <p className="text-fuchsia-900">{props.goal}</p>
    
    </div>

  );
}

export default function Projects() {
  return (
    <section id="projects" className="text-gray-500 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
    <div className="flex flex-col w-full mb-20">
      <CodeIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        Software Engineering Experience
      </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Following are my past software industry experiences - 
        </p>
      </div>
      {projects.map((project )=>(
    <div>
     <div className="bg-indigo-300 rounded p-4 h-full items-center">
        <OutlineCollapse title={project.title} image={project.image} 
        width={project.width} height={project.height} 
        description={project.description} date={project.subtitle} location={project.location}
        goal={project.goal}/>
            
        <Collapsible trigger={<ArrowsExpandIcon className="w-10 h-10 mx-auto text-center hover:bg-indigo-700 rounded " />}>
        <CustCard
              tech={project.tech}
              tools={project.tools}
              tasks={project.tasks}
               />
        </Collapsible>
          </div>
      <br></br>
      </div>
      ))}
      

      
    </div>
    </section>
  );
}
