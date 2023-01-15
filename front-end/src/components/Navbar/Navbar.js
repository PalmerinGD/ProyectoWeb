// React hooks
import { useState } from 'react';

// Componentes
import Logo from './Logo';
import Login from '../Login/Login';

// Bootstrap components
import Button from 'react-bootstrap/Button';
import NavbarB from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import Cookies from 'js-cookie';

import { GoSignOut } from "react-icons/go";
function Navbar({token, setToken}) {

    // Determina si se muestra la navbar dependiendo del size.
    
    const [show, setShow] = useState(false);

    const handleLogout = () => {
        Cookies.remove('user_id')
        Cookies.remove('user_name')
        Cookies.remove('user_rol')
        setToken(null)
    }

    return (
        <NavbarB bg='light' expand="lg">
            <Container>
                <NavbarB.Brand>
                    <Logo/>
                </NavbarB.Brand>
                <NavbarB.Toggle aria-controls="basic-navbar-nav" />
                <NavbarB.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        {token === null ? <>
                        
                            <Button onClick={() => setShow(true)}>Login</Button>
                            <Login token={token} setToken={setToken} show={show} setShow={setShow} />
                        </> : <><Button variant="danger" onClick={() => handleLogout()}>Logout <GoSignOut/> </Button></>}
                    </Nav>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    )

}

export default Navbar;