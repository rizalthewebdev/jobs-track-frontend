import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Home/Navbar";

const NotFound = () => {
    document.title = "~ Page Not Found ~"
   return (
      <>
         <Navbar/>
         <main className="flex flex-col h-[calc(100vh - 75px)] items-center justify-center pt-5 mx-5 space-y-10">
            <div className="mt-20">
               <img
                  src="not-found.png"
                  alt="not-found-illustration"
                  className="lg:max-w-xl md:max-w-md max-w-xs"
               />
            </div>
            <Link to="/"><button className="cta-button--primary">Back to Home</button></Link>
         </main>
      </>
   );
};

export default NotFound;
