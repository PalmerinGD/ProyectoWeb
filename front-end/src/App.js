// Hooks
import { useEffect, useState } from "react";

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Cookies
import Cookies from 'js-cookie';

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Dashboard from "./components/Dashboard/Dashboard"; 
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Busqueda from "./components/Busqueda/Busqueda";

import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Datos from "./components/Datos/Datos";

function App() {

  const [token, setToken] = useState(null);

  useEffect(()=>{
    if(Cookies.get('user_name') && Cookies.get('user_id') && Cookies.get('user_rol')) {
      setToken({
        user_id: Cookies.get('user_id'),
        user_name: Cookies.get('user_name'),
        user_rol: Cookies.get('user_rol')
      })
      console.log(token);
    }
    else {
      Cookies.remove('user_name')
      Cookies.remove('user_id')
      Cookies.remove('user_rol')
      setToken(null)
    }
  }, [])
 
  console.log(token);
  return (
    <BrowserRouter>
    <Container fluid className='overflow-hidden p-0'>
        <Row>
            <Col>
                <Navbar token={token} setToken={setToken}/> 
            </Col>
        </Row>
        <Row>
            <Col>
              <Routes>
                <Route path="/" element={token !== null? <Navigate replace to={token.user_rol === "0" ? "dashboard" : token.user_rol === "1" ? "datos" : "busqueda"}/> : <Main />}/>
                <Route element={<ProtectedRoute admin token={token}/>}>
                  <Route path="/dashboard/" element={<Dashboard token={token}/>} />
                </Route>
                <Route element={<ProtectedRoute user token={token}/>}>
                  <Route path="/datos/" element={<Datos token={token}/>}/>
                </Route>
                <Route element={<ProtectedRoute profesor token={token}/>}>
                  <Route path="/busqueda/" element={<Busqueda token={token}/>}/>
                </Route>
              </Routes>
            </Col>
        </Row>
        <Row>
            <Col>
                <Footer/>
            </Col>
        </Row>
    </Container>
    </BrowserRouter>
  )
}

export default App;