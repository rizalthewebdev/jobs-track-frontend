import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import {BsPersonCircle, BsPerson} from 'react-icons/bs'
import {RiSearchLine} from 'react-icons/ri'
import { GoHome } from "react-icons/go";
import {FiPlus} from 'react-icons/fi'
import {IoStatsChartOutline} from 'react-icons/io5'
import { VscSignOut } from "react-icons/vsc";
import ButtonNavMobile from "./ButtonNavMobile";
import { useAppContext } from "../../context/appContext";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   const { showSidebar, toggleSidebar, logoutUser } = useAppContext();
   return (
      <header>
         <nav
            className={`w-screen bg-white fixed flex py-2.5 px-7 md:px-12 border-b border-purple-400/75 shadow-lg`}
         >
            {showSidebar && <Sidebar />}
            <div className="w-full flex items-start">
               <div className="w-full flex items-center justify-between">
                  {showSidebar && (
                     <div className="fixed z-50 hidden md:inline-flex items-center gap-3 py-2 ft-logo">
                        <img src="logo.svg" alt="" width={35} />
                        Jobs Tracking
                     </div>
                  )}
                  <button
                     className={`hidden md:flex ${
                        showSidebar && "ml-60"
                     } icon-button--wrapper`}
                     onClick={toggleSidebar}
                  >
                     {showSidebar ? (
                        <CgMenuRight className="w-6 h-6" />
                     ) : (
                        <CgMenuLeft className="w-6 h-6" />
                     )}
                  </button>
                  <a
                     href="/dashboard"
                     className="ft-logo text-lg tracking-wider inline-flex items-center gap-x-2.5"
                  >
                     <img
                        src="logo.svg"
                        alt="logo"
                        width={30}
                        className="md:hidden"
                     />
                     Dashboard
                  </a>
                  <div className="text-right">
                     <Menu as="div" className="relative inline-block text-left">
                        <div>
                           <Menu.Button className="icon-button--wrapper">
                              <BsPersonCircle className="w-6 h-6" />
                           </Menu.Button>
                        </div>
                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-100"
                           enterFrom="transform opacity-0 scale-95"
                           enterTo="transform opacity-100 scale-100"
                           leave="transition ease-in duration-75"
                           leaveFrom="transform opacity-100 scale-100"
                           leaveTo="transform opacity-0 scale-95"
                        >
                           <Menu.Items className="absolute right-0 w-44 mt-3.5 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5">
                              <div className="px-1 py-1 flex flex-col gap-1.5">
                                 <Menu.Item>
                                    <NavLink to="/">
                                       <button onClick={logoutUser} className="hover:bg-red-600/90 hover:text-white text-red-700 ring-red-300/90 bg-red-600/25 nav-profile--button">
                                          <VscSignOut className="w-6 h-6 mr-2.5" />
                                          Log Out
                                       </button>
                                    </NavLink>
                                 </Menu.Item>
                              </div>
                           </Menu.Items>
                        </Transition>
                     </Menu>
                  </div>
               </div>
            </div>
         </nav>
         <div className="text-right md:hidden">
            <Menu
               as="div"
               className="fixed bottom-8 right-8 inline-block text-left"
            >
               <div>
                  <Menu.Button className="icon-button--wrapper bg-purple-400/50 ring-1 ring-purple-400">
                     <CgMenuRight className="w-5 h-5" />
                  </Menu.Button>
               </div>
               <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
               >
                  <Menu.Items className="absolute -right-3 w-14 -mt-[305px] origin-bottom-right bg-trasnparent rounded-full">
                     <div className="px-1 py-1 flex flex-col gap-3">
                        <ButtonNavMobile Icon={GoHome} to="/dashboard" title="Dashboard" />
                        <ButtonNavMobile Icon={IoStatsChartOutline} to="job-stats" title="Job Stats" />
                        <ButtonNavMobile Icon={FiPlus} to="add-job" title="Add Job" />
                        <ButtonNavMobile Icon={RiSearchLine} to="search" title="Search" />
                        <ButtonNavMobile Icon={BsPerson} to="profile" title="My Profile" />
                     </div>
                  </Menu.Items>
               </Transition>
            </Menu>
         </div>
      </header>
   );
};

export default Navbar;
