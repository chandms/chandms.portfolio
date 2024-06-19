import React from "react";
import { teaching } from "../data";
import { LibraryIcon } from "@heroicons/react/solid";

export default function Teaching() {
  return (
    <section id="teaching" className=" body-font">
    <div className="container px-5 py-10 mx-auto text-center ">
    <div className="flex flex-col w-full mb-20 overflow-hidden">
      <LibraryIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
        Teaching
      </h1>
      
        {

          teaching.map((item)=> {
              return (
                <div className="px-auto py-auto mb-4 text-gray-500 text-md font-base shadow-lg ">
                  <h1>{item.role} [{item.sems}]</h1>
                  <h1>Description: {item.desc}</h1>
                </div>
              );
          })


        }
      
      </div>
    </div>
    </section>
  );
}
