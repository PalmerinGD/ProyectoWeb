import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";
function Menu() {
    return (
        <>
            <Link to="graph">
                Graph
            </Link>
            <Link to="search">
                Search
            </Link>
        </>
    )
}

export default Menu;