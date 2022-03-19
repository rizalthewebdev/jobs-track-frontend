import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({
   label,
   inputName,
   inputType,
   InputId,
   value,
   setValue,
   password,
}) => {
   const [shown, setShown] = useState(inputType);

   const shownPassword = (e) => {
      e.preventDefault();
      if (shown === "password") {
         setShown("text");
      } else {
         setShown("password");
      }
   };

   return (
      <div className="relative">
         <input
            className="peer px-1.5 bg-transparent w-full h-10 ring-1 ring-gray-400 rounded-sm focus:outline-none text-black placeholder-transparent focus:ring-2 focus:ring-purple-700 poppins"
            placeholder={label}
            type={shown}
            id={InputId}
            name={inputName}
            value={value}
            onChange={setValue}
         />
         {password &&
            (shown === "password" ? (
               <button
                  className="shown-password"
                  onClick={shownPassword}
                  title="Show Password"
               >
                  <AiFillEye />
               </button>
            ) : (
               <button
                  className="shown-password text-purple-600"
                  onClick={shownPassword}
                  title="Hide Password"
               >
                  <AiFillEyeInvisible />
               </button>
            ))}
         <label
            className="absolute z-10 left-2 -top-3 poppins text-purple-800 bg-white px-1 text-sm transition-all duration-200 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-1 peer-focus:text-purple-800 peer-focus:-top-3 peer-focus:text-sm peer-focus:z-10"
            htmlFor={InputId}
         >
            {label}
         </label>
      </div>
   );
};

export default Input;
