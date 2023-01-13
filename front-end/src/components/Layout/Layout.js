import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
function Layout() {

  const [token, setToken] = useState(null);

  useEffect(()=>{
    if(Cookies.get('user_name') && Cookies.get('user_id') && Cookies.get('user_rol')) {
      setToken({
        user_id: Cookies.get('user_id'),
        user_name: Cookies.get('user_name'),
        user_rol: Cookies.get('user_rol')
      })
    }
    else {
      Cookies.remove('user_name')
      Cookies.remove('user_id')
      Cookies.remove('user_rol')
      setToken(null)
    }
  }, [])
  return (
    <Container fluid className='overflow-hidden p-0'>
        <Row>
            <Col>
                <Header/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Navbar token={token} setToken={setToken}/> 
            </Col>
        </Row>
        <Row>
            <Col>
                <Outlet context={{token}}/> 
            </Col>
        </Row>
        <Row>
            <Col>
                <Footer/>
            </Col>
        </Row>
    </Container>
  )
}

export default Layout