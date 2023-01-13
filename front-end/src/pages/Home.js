
// Componentes
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";


// Bootstrap componentes
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Home({token , setToken}) {

    return (
        <Container className="p-0 overflow-hidden" fluid>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar token={token} setToken={setToken} />
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