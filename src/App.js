import React from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import LeadManagement from "./components/LeadManagement";
import Home from "./components/Home";
import Service from "./components/Service";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/lead-management' element={<LeadManagement />} />
      <Route path='*' element={<Navigate to = '/sign-in'/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;

