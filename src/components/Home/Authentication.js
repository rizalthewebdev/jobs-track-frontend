import React, { useEffect, useState } from "react";
import Input from "../Input";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
const initialState = {
   name: "",
   email: "",
   password: "",
   isMember: false,
};

const Authentication = () => {
   const navigate = useNavigate();
   const { user, isLoading, displayAlert, setupUser } =
      useAppContext();
   const [values, setValues] = useState(initialState);

   const toggleMember = () => {
      setValues({ ...values, isMember: !values.isMember });
   };

   const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };

   const submit = (e) => {
      const { name, email, password, isMember } = values;
      e.preventDefault();
      if ((!isMember && !name) || !email || !password) {
         displayAlert();
         return;
      }

      const currentUser = { name, email, password };

      if (isMember) {
         setupUser({
            currentUser,
            endPoint: "login",
            alertText: "Login Successfull! Redirecting...",
         });
      } else {
         setupUser({
            currentUser,
            endPoint: "register",
            alertText: "User Created! Redirecting...",
         });
      }
   };

   useEffect(() => {
      if (user) {
         setTimeout(() => {
            navigate("/dashboard");
         }, 3000);
      }
   }, [user, navigate]);

   return (
      <>
         <h4 className="absolute left-14 text-2xl tracking-wide ft text-white">
            {`${values.isMember ? "Login" : "Register"}`}
         </h4>
         <form
            className=" mx-auto flex flex-col gap-8 w-5/6 mt-32 md:mt-[150px]"
            onSubmit={submit}
         >
            {!values.isMember && (
               <Input
                  label="Name"
                  inputType="text"
                  inputId="name"
                  inputName="name"
                  value={values.name}
                  setValue={handleChange}
               />
            )}
            <Input
               label="Email"
               inputType="email"
               inputId="email"
               inputName="email"
               value={values.email}
               setValue={handleChange}
            />
            <Input
               label="Password"
               inputType="password"
               inputId="password"
               inputName="password"
               value={values.password}
               setValue={handleChange}
               password
            />

            <button
               type="submit"
               className="cta-button--primary poppins bg-[#6517BE]"
               disabled={isLoading}
            >
               {values.isMember ? "Login" : "Register"}
            </button>
         </form>
         <div className="w-full flex items-center justify-center pt-6 poppins space-x-1">
            <p className="text-gray-900">
               {values.isMember
                  ? "Not have account yet ? "
                  : "Already have account ? "}
            </p>
            <button
               className="text-blue-700 hover:text-purple-900 hover:underline"
               onClick={toggleMember}
            >
               {values.isMember ? "Register" : "Login"}
            </button>
         </div>
      </>
   );
};

export default Authentication;
