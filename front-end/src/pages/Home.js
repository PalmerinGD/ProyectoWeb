import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Home({login, setLogin}) {

    return (
        <Container className="p-0 overflow-hidden" fluid>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navigation login={login} setLogin={setLogin} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Main />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;