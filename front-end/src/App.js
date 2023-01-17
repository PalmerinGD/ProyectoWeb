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
import Header from './components/Header/Header'

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
        user_id: Number(Cookies.get('user_id')),
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
                <Route path="/" element={token ? <Navigate replace to="/datos"/> : <Main />}/>
                <Route element={<ProtectedRoute token={token}/>}>
                  <Route path="/dashboard/" element={<Dashboard/>} />
                </Route>
                <Route element={<ProtectedRoute token={token}/>}>
                  <Route path="/datos/" element={<Datos token={token}/>}/>
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