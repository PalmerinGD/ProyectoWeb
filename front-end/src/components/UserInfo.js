import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function UserInfo({user, setUser}) {

    if(user) {
    return (
      <Modal
      show={user !== null ? true : false}
      onHide={()=>setUser(null)}
      backdrop="static"
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>Informacion del usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>Nombre: {user.person_name}</Col>
          </Row>
          <Row>
            <Col>Apellido Paterno: {user.person_surnamep}</Col>
          </Row>
          <Row>
            <Col>Apellido Materno: {user.person_surnamem}</Col>
          </Row>
          <Row>
            <Col>Escuela: {}</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setUser(null)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    )
    }
    return <></>
}

export default UserInfo;