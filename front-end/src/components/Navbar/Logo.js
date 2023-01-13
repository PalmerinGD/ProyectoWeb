import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Logo() {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center" sm={1}>
          <img src="IPN-logo.png" width="40" height="60" className="d-block m-auto align-center object-fit-cover" alt="Logo IPN" />
        </Col>
        <Col className="text-center">
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
    </Container>
  )
}

export default Logo