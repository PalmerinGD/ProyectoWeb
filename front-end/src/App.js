import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Cookies from 'js-cookie';

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";



function App() {
  const [login, setLogin] = useState(null);

  useEffect(()=>{
    if(Cookies.get('user_name') && Cookies.get('user_password') && Cookies.get('user_rol')) {
      setLogin({
        user_name: Cookies.get('user_name'),
        user_rol: Cookies.get('user_rol')
      })
    }
    else {
      Cookies.remove('user_name')
      Cookies.remove('user_password')
      Cookies.remove('user_rol')
      setLogin(null)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login ? <Navigate replace to={login.user_rol === "1" ?"/dashboard" : "/registro"}/> : <Home login={login} setLogin={setLogin}/>}/>   
        <Route element={<ProtectedRoute admin="1" login={login}/>}>
          <Route path="/dashboard/*" element={<Dashboard login={login} setLogin={setLogin}/>}/>
        </Route>
        <Route element={<ProtectedRoute admin="2" login={login}/>}>
          <Route path="/registro/" element={<Register/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;