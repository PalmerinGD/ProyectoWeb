import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Cookies from 'js-cookie';

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";



function App() {
  const [login, setLogin] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(()=>{
    if(Cookies.get('user_name') && Cookies.get('user_password')) {
      setLogin(true);
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login ? <Navigate replace to="/dashboard"/> : <Home login={login} setLogin={setLogin}/>}/>   
        <Route element={<ProtectedRoute login={login}/>}>
          <Route path="/dashboard/*" element={<Dashboard/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;