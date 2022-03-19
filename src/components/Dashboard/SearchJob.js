import React from "react";
import { FiFilter } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";

const SearchJob = () => {

   return (
      <>
         <main>
            <div className="flex w-full items-center justify-center gap-3">
               <div className="flex w-[75%]">
                  <div
                     className="relative w-full flex items-center rounded-md px-2 py-1.5 ring-1 poppins ring-purple-300 peer-focus:ring-purple-700"
                  >
                     <RiSearchLine
                        className="text-xl"
                     />
                     <input
                        type="text"
                        className="peer outline-none w-full pl-2 text-sm"
                        placeholder="Search Jobs"
                     /> 
                  </div>
               </div>
               <button
                  className="icon-button--wrapper"
                  title="Filter Jobs"
               >
                  <FiFilter />
               </button>
            </div>
         </main>
      </>
   );
};

export default SearchJob;
