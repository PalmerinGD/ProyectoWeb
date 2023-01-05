import { useState,useEffect } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [login, setLogin] = useState(true);
  useEffect(()=>{
    if(login) {
      <Navigate replace to="/dashboard"/>
      console.log('ok');
    }
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route element={<ProtectedRoute login={login}/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
