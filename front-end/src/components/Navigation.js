import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import  Nav  from 'react-bootstrap/Nav';

import Login from './Login';

import { useState } from 'react';
function Navigation({login, setLogin}) {
    const [show, setShow] = useState(false);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src="IPN-logo.png" width="40" height="60" className="d-inline-block align-center object-fit-cover" alt="Logo IPN" />
                    {'  '}Instituto Politécnico Nacional
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink>Inicio</NavLink>
                    </Nav>
                    <Nav>
                        <Button onClick={() => setShow(true)}>Login</Button>
                        <Login login={login} setLogin={setLogin} show={show} setShow={setShow} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;