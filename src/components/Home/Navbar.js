import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const Navbar = () => {
   let { openModal } = useAppContext();

   return (
      <header>
         <nav className="w-screen bg-white fixed py-2.5 px-7 md:px-12 border-b border-purple-400/75 shadow-lg">
            <div className="flex justify-between items-center">
               <a href="/" className="ft-logo text-[35px] tracking-wider">
                  JT
               </a>
               <div className="flex items-center justify-center space-x-2 poppins text-sm">
                  <Link to="/auth">
                     <button
                        className="cta-button--primary text-purple-800 bg-white hover:text-white ring-1 ring-purple-700 hover:bg-purple-700 font-semibold focus:outline-none"
                        onClick={openModal}
                        title="Register/Login User"
                     >
                        Register / Login
                     </button>
                  </Link>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
