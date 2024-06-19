import React from "react";
import { publications } from "../data";
import { BookOpenIcon} from "@heroicons/react/solid";

export default function Publications() {
  return (
    <section id="publication" className=" body-font">
    <div className="px-5 py-10 mx-auto text-center lg:px-10">
    <div className="flex flex-col w-full mb-20">
      <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
        Publication
      </h1>
      
        {
            publications.map((publication) => {
                return (
                <div className="">
                    <a target="_blank" rel="noreferrer" href={publication.link} className=" underline font-bold hover:bg-indigo-300 rounded text-gray-500">{publication.title}</a>
                    <br></br>
                    <h1 className="">{publication.authors}</h1>
                </div>
                    
                );
            })
        }
      
      </div>
    </div>
    </section>
  );
}
