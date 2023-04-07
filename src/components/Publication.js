import React from "react";
import { publications } from "../data";
import { BookOpenIcon} from "@heroicons/react/solid";

export default function Publications() {
  return (
    <section id="publication" className="text-gray-500 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
    <div className="flex flex-col w-full mb-20">
      <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        Publication
      </h1>
      
        {
            publications.map((publication) => {
                return (
                <div>
                    <a href={publication.link} className=" underline font-bold hover:text-indigo-400 text-white">{publication.title}</a>
                    <h1 className="text-white">{publication.authors}</h1>
                </div>
                    
                );
            })
        }
      
      </div>
    </div>
    </section>
  );
}
