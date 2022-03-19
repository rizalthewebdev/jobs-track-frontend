import React from "react";
import { Navbar } from "../components/Dashboard";
import { useAppContext } from "../context/appContext";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
   const { showSidebar } = useAppContext();
   return (
      <>
         <Navbar />
         <main
            className={`relative top-[75px] ${
               showSidebar ? "md:pl-[240px]" : ""
            } -z-50`}
         >
            <Outlet />
         </main>
      </>
   );
};

export default Dashboard;
