import ModalB from 'react-bootstrap/Modal'
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import { GoPerson, GoTrashcan, GoCheck } from "react-icons/go";

import { useState } from 'react'

import './modal.css';
import axios from 'axios'

function Modal({ entity, setEntity }) {

  const handleEmail = () => {
    axios.get(`/sendTicket?person_id=${entity.user_id}`)
    .then(res => {
      console.log(res);
    })
  }
  const handleDelete = () => {
    axios.delete(`/user?user_id=${entity.user_id}`)
    .then(res => console.log(res))
  }

  console.log(entity);
  if(entity === null) return null
  return (
    <ModalB size="lg" show={true} onHide={() => setEntity(null)} aria-labelledby="modal-lg" centered>
      <ModalB.Header id="modal-lg" className='justify-content-center' closeButton>
        <h4>
          Informacion del usuario{' '}<GoPerson/>
        </h4>
      </ModalB.Header>   
      <ModalB.Body>
        <Container>
          <Row>
            <Col>
            Nombre: {entity.person_name} 
            </Col>   
            <Col>
            Id usuario: {entity.user_id} 
            </Col>
          </Row>   
          <Row>
            <Col>
            Apellido Paterno: {entity.person_surnamep}
            </Col>
            <Col>
            Apellido Materno: {entity.person_surnamem} 
            </Col>
          </Row>
          <Row>
            <Col>
            Rol: {entity.user_rol_id === "0" ? 'admin' : entity.user_rol_id === '1' ? 'estudiante' : 'profesor'} 
            </Col>
            <Col>
            Discapacidad: {entity.person_discapacity === '1' ? 'Si' : entity.person_discapacity === '0' ? 'No' : 'Sin confirmar'} 
            </Col>
          </Row>
          <Row>
            <Col>
            Presea: {entity.presea_name} 
            </Col>
          </Row>
          <Row>
            <Col>
            Escuela: {entity.school_name} 
            </Col>
          </Row>
        </Container> 
      </ModalB.Body>
      <ModalB.Footer>
        <Button disabled={entity.user_email === ''} onClick={() => handleEmail()}> Mandar Correo </Button>
        <Button variant="danger" onClick={() => handleDelete()}>Eliminar <GoTrashcan /></Button>
      </ModalB.Footer>
    </ModalB>
  )
}

export default Modal