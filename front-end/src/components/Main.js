import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Carrusel from "./Carrusel";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";

function Main() {
    return (
        <Container fluid>
            <Row style={{backgroundColor:'black'}}>
                <Col>
                    <Carrusel/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col className="text-center bg-light p-3">
                    <figure>
                        <blockquote className="blockquote">
                            <p>Instituto Politécnico Nacional</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            La Técnica al Servicio de la Patria
                        </figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col xs={12} md={4}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="IPN-logo.png" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="IPN-logo.png" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="IPN-logo.png" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;