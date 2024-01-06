import React from "react";
import { education } from "../data";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Education() {
  return (
    <section id="education" className="text-gray-500 body-font">
    <div className="container px-5 py-10 mx-auto text-center ">
    <div className="flex flex-col w-full mb-20 overflow-hidden">
      <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
        Education
      </h1>
      
        {
            education.map((edu) => {
                return (
                <div className="px-auto py-auto mb-4">
                    <h1 className="text-2xl font-bold shadow-lg  ">{edu.degree}</h1>
                    <div className="text-sm font-bold shadow-lg text-green-900 justify-center" >
                        <h1>{edu.school}</h1>
                        <h1>{edu.date}</h1>
                    </div>
                    <h1>{edu.major}</h1>
                    <h1>{edu.CGPA}</h1>
                </div>
                    
                );
            })
        }
      
      </div>
    </div>
    </section>
  );
}
