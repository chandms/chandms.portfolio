import React from "react";
import { interests } from "../data";
import { ThumbUpIcon} from "@heroicons/react/solid";

export default function Interests() {
  return (
    <section id="interests" className="text-gray-500 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
    <div className="flex flex-col w-full mb-20 overflow-hidden">
      <ThumbUpIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="px-auto sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
        Interests
      </h1>
      
        {
            interests.map((interest) => {
                return (
                <div className="px-auto py-auto mb-4">
                    <h1 className="text-md font-base shadow-lg  ">{interest}</h1>
                </div>
                    
                );
            })
        }
      
      </div>
    </div>
    </section>
  );
}