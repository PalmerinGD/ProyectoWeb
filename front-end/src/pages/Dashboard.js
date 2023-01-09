import React from 'react';
import Graph from './Graph';
import Search from './Search';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Cookies from 'js-cookie';


function Dashboard({login, setLogin}) {

    const handleSignOut = () => {
        Cookies.remove('user_name');
        Cookies.remove('user_password');
        Cookies.remove('user_rol');
        setLogin(null);
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <h1>
                            INSTITUTO POLITECNICO NACIONAL
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={handleSignOut}>Cerrar sesion</Button>
                </Row>
                <Row className='justify-content-evenly'>
                    <Col md={5} className='shadow-sm p-3 rounded bg-light'><Search/></Col>
                    <Col md={5} className='shadow-sm p-3 rounded bg-light'><Graph/></Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;