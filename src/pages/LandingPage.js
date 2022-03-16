import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import { useAppContext } from "../context/appContext";

const LandingPage = () => {
   document.title = "Home ~ Jobs Tracking";

   const {openModal} = useAppContext()
   return (
      <>
         <Navbar />
         <main className="flex flex-col h-[calc(100vh - 75px)] items-center justify-evenly md:flex-row mx-5 md:space-y-5 pt-14">
            <div className="-z-10 md:-mt-8">
               <img
                  src="illustration.jpg"
                  alt="illustration"
                  className="lg:max-w-xl md:max-w-md max-w-xs"
               />
            </div>
            <div className="max-w-[420px] justify-center items-start flex flex-col space-y-5 md:gap-y-2">
               <h1 className="text-3xl md:text-4xl leading-tight md:leading-snug ft text-purple-900 ">
                  Easily manage your job applications
               </h1>
               <p className="text-[15px] sm:text-base md:text-lg tracking-wide md:tracking-normal poppins font-[400] text-gray-600/90 mb-2">
                  Simple tool to manage your job applications. This website
                  build with job tracking API for the backend which has
                  registration, login and CRUD features which made by me
               </p>
               <Link to="register">
                  <button className="cta-button--primary poppins" onClick={openModal}>
                     Get Started
                  </button>
               </Link>
            </div>
         </main>
         <Outlet />
      </>
   );
};

export default LandingPage;
