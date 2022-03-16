import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const Navbar = () => {
   const { openModal } = useAppContext();

   return (
      <header>
         <nav className="w-screen bg-white fixed py-2.5 px-7 md:px-12 border-b border-purple-400/75 shadow-lg">
            <div className="flex justify-between items-center">
               <a href="/" className="ft-logo text-[35px] tracking-wider">
                  JT
               </a>
               <div className="flex items-center justify-center space-x-2 poppins text-sm">
                  <Link to="/register">
                     <button
                        className="cta-button--primary"
                        onClick={openModal}
                     >
                        Get Started
                     </button>
                  </Link>
                  <Link to="/login">
                     <button
                        className="cta-button--secondary"
                        onClick={openModal}
                     >
                        Login
                     </button>
                  </Link>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
