import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import {
   Index,
   JobStats,
   AddJob,
   SearchJob,
   UserProfile,
} from "./components/Dashboard";
import { Modal } from "./components/Home";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LandingPage />}>
               <Route path="register" element={<Modal register />} />
               <Route path="login" element={<Modal login />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
               <Route index element={<Index />} />
               <Route path="job-stats" element={<JobStats />} />
               <Route path="add-job" element={<AddJob />} />
               <Route path="search" element={<SearchJob />} />
               <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
