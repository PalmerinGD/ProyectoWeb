import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import Logo from '../Navbar/Logo'

function Footer() {
    return (
        <Container fluid className="p-5 bg-light">
            <Row>
                <Col xl={3} lg={4} sm={12} className="mx-5">
                    <Logo/> 
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <h4>
                                    Links
                                </h4>
                                <ul>
                                    <li>Home</li>
                                    <li>Carreras</li>
                                    <li>Oferta Educativa</li>
                                </ul>
                            </Col>
                            <Col>
                                <h4>
                                    Redes Sociales
                                </h4>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;