import React from "react";
import { useAppContext } from "../../context/appContext";
import { GoHome } from "react-icons/go";
import {RiSearchLine} from 'react-icons/ri'
import {FiPlus} from 'react-icons/fi'
import {IoStatsChartOutline} from 'react-icons/io5'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
   const { showSidebar } = useAppContext();
   return (
      showSidebar && (
         <>
            <div className="hidden fixed left-0 bottom-0 top-0 md:inline w-[250px] h-screen bg-white z-50 transition-all duration-500 border-r border-purple-400/75">
               <div className="pt-[85px] px-12 flex flex-col gap-y-5">
                  <NavLink
                     to="/dashboard"
                     className={({ isActive }) =>
                        isActive
                           ? "active__sidebar-button sidebar-button"
                           : "sidebar-button"
                     }
                  end>
                     <GoHome fontSize={20} />
                     Dashboard
                  </NavLink>
                  <NavLink
                     to="job-stats"
                     className={({ isActive }) =>
                        isActive
                           ? "active__sidebar-button sidebar-button"
                           : "sidebar-button"
                     }
                  >
                     <IoStatsChartOutline fontSize={20} />
                     Job Stats
                  </NavLink>
                  <NavLink
                     to="add-job"
                     className={({ isActive }) =>
                        isActive
                           ? "active__sidebar-button sidebar-button"
                           : "sidebar-button"
                     }
                  >
                     <FiPlus fontSize={20} />
                     Add Job
                  </NavLink>
                  <NavLink
                     to="search"
                     className={({ isActive }) =>
                        isActive
                           ? "active__sidebar-button sidebar-button"
                           : "sidebar-button"
                     }
                  >
                     <RiSearchLine fontSize={20} />
                     Search Job
                  </NavLink>
               </div>
            </div>
         </>
      )
   );
};

export default Sidebar;
