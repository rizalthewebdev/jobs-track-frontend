import React from "react";

const Input = ({ label, inputType, InputId, value, setValue }) => {
   return (
      <div className="relative">
         <input
            className="peer px-1.5 bg-transparent w-full h-10 ring-1 ring-gray-400 rounded-sm focus:outline-none text-black placeholder-transparent focus:ring-2 focus:ring-purple-700 poppins"
            placeholder={label}
            type={inputType}
            id={InputId}
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
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
