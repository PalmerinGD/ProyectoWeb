import ModalB from 'react-bootstrap/Modal'
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import { GoPerson, GoTrashcan, GoCheck } from "react-icons/go";

function Modal({ entity, setEntity }) {

  if(entity === null) return null
  return (
    <ModalB size="lg" show={true} onHide={() => setEntity(null)} aria-labelledby="modal-lg">
      <ModalB.Header id="modal-lg">
        <h4>
          Informacion del usuario{' '}<GoPerson/>
        </h4>
      </ModalB.Header>   
      <ModalB.Body>
        <Container>
          <Row>
            <Col>
            </Col>   
          </Row>   
          <Row>
            <Col>
              <Button>Actualizar <GoCheck/></Button>
              <Button variant="danger">Eliminar <GoTrashcan/></Button>
            </Col>   
          </Row> 
        </Container> 
      </ModalB.Body>
    </ModalB>
  )
}

export default Modal