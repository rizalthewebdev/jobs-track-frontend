import React from "react";
import { Navbar } from "../components/Dashboard";
import { useAppContext } from "../context/appContext";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";

const Dashboard = () => {
   const { showSidebar } = useAppContext();
   return (
      <>
         <Navbar />
         <main
            className={`relative top-[75px] ${
               showSidebar ? "md:pl-[270px]" : "left-5 md:left-16"
            } -z-50`}
         >
            <Outlet />
            <Loading />
         </main>
      </>
   );
};

export default Dashboard;
