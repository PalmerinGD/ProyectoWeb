import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Schools from '../School/Schools'
import { useState,useEffect } from 'react'

import { GoPerson } from "react-icons/go";

import { getAll } from '../../models/school'
import Discapacidad from './Discapacidad'
import Instrucciones from './Instrucciones'

function Datos({ entity }) {


    const [nombre, setNombre] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [school, setSchool] = useState('')
    const [rol, setRol] = useState('')

  const [schools, setSchools] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const res = await getAll();
            setSchools(res.data.result)
        }
        fetch()
    })
  return (
    <Container className="mt-5 mb-5">
        <Row>
            <Col>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus. Quisque id diam vel quam elementum pulvinar. Quam nulla porttitor massa id neque. Et leo duis ut diam quam nulla porttitor. Facilisi morbi tempus iaculis urna id volutpat lacus. Amet justo donec enim diam vulputate ut pharetra sit. Nam libero justo laoreet sit amet cursus sit amet. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Lacus suspendisse faucibus interdum posuere. Pharetra pharetra massa massa ultricies. Convallis aenean et tortor at risus viverra adipiscing.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Instrucciones/>
                </Row>
            </Container>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col className="text-center">
                  <h3>
                      Verifique sus datos{' '}<GoPerson/>
                  </h3>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Form>
                  <Row>
                      <Col md={12} lg={4}>
                          <Form.Group>
                              <Form.Label>Nombre</Form.Label>
                              <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                          </Form.Group>
                      </Col>
                      <Col md={12} lg={4}>
                          <Form.Group>
                              <Form.Label>Apellido Paterno</Form.Label>
                              <Form.Control type="text" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
                          </Form.Group>
                      </Col>
                      <Col>
                          <Form.Group>
                              <Form.Label>Apellido Materno</Form.Label>
                              <Form.Control type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
                          </Form.Group>
                      </Col>
                  </Row>
                  <Row className='mt-2'>
                      <Col>
                          <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
                          </Form.Group>
                      </Col>
                      <Col>
                            <Schools schools={schools} setSchool={setSchool}/> 
                      </Col>
                  </Row>
                  <Row className='mt-2'>
                        <Col>
                            <Discapacidad/>      
                        </Col>
                        <Col>
                          <Form.Group>
                              <Form.Label>Numero de invitados</Form.Label>
                              <Form.Control type="number" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
                          </Form.Group>
                        </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                        <Button>Aceptar</Button>
                    </Col>
                  </Row>
            </Form>
        </Row>
    </Container>
  )
}

export default Datos