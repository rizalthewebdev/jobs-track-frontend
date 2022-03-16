import React, { useState } from "react";
import Input from "../Input";

const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   return (
      <form className=" mx-auto flex flex-col gap-8 w-5/6 mt-32 md:mt-[150px]">
         <Input
            label="Name"
            inputType="text"
            inputId="name"
            value={name}
            setValue={setName}
         />
         <Input
            label="Email"
            inputType="email"
            inputId="email"
            value={email}
            setValue={setEmail}
         />
         <Input
            label="Password"
            inputType="password"
            inputId="password"
            value={password}
            setValue={setPassword}
         />

         <button className="cta-button--primary poppins bg-[#6517BE]">Register</button>
      </form>
   );
};

export default Register;
