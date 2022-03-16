import { Menu } from "@headlessui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const ButtonNavMobile = ({ Icon, title, to }) => {
   return (
      <Menu.Item>
         <NavLink
            to={to}
            className={({ isActive }) =>
               isActive
                  ? `bg-purple-700 text-white button-nav__mobile`
                  : `button-nav__mobile`
            }
            title={title}
            end
         >
            <Icon className="w-5 h-5" aria-hidden="true" />
         </NavLink>
      </Menu.Item>
   );
};

export default ButtonNavMobile;
