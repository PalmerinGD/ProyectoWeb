import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useState,useEffect } from 'react'

import { GoPerson } from "react-icons/go";

import Discapacidad from './Discapacidad'
import Instrucciones from './Instrucciones'
import axios from 'axios'
import Invitados from './Invitados'
import Boleto from './Boleto'

function Datos({ token }) {



    const [nombre, setNombre] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [email, setEmail] = useState('')
    const [numeroInvitados, setNumeroInvitados] = useState(0)
    const [id, setId] = useState(null)
    const [discapacidad, setDiscapacidad] = useState(0)
    const [condiciones, setCondiciones] = useState(false)
    const [confirmacion, setConfirmacion] = useState(false)



    useEffect(() => {
        const fetch = async () => {
            axios.get(`/persons?user_id=${token.user_id}`)
            .then(res => {
                const data = res.data.result;
                setNombre(data.person_name)
                setApellidoPaterno(data.person_surnamep)
                setApellidoMaterno(data.person_surnamem)
                setEmail(data.user_email)
                setId(Number(data.person_id))
                if(data.user_email !== '') setConfirmacion(true)
            })

        }
        fetch()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(condiciones);
        if(email === '' || !condiciones) return;
        axios.post('/user', {
            person_id: id,
            person_name: nombre,
            person_surnamep: apellidoPaterno,
            person_surnamem: apellidoMaterno,
            person_numero_invitados: numeroInvitados,
            person_discapacity: discapacidad,
            user_email: email,
        })
        .then(res => setConfirmacion(true))
    }

    
    if(!confirmacion)
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
            <Form onSubmit={(e) => handleSubmit(e)}>
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
                              <Form.Control type="text" value={'' || apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
                          </Form.Group>
                      </Col>
                      <Col>
                          <Form.Group>
                              <Form.Label>Apellido Materno</Form.Label>
                              <Form.Control type="text" value={'' || apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
                          </Form.Group>
                      </Col>
                  </Row>
                  <Row className='mt-2'>
                      <Col>
                          <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" value={'' || email} onChange={(e) => setEmail(e.target.value)} />
                          </Form.Group>
                      </Col>
                  </Row>
                  <Row className='mt-2'>
                        <Col>
                            <Discapacidad setDiscapacidad={setDiscapacidad}/>      
                        </Col>
                        <Col>
                            <Invitados setNumeroInvitados={setNumeroInvitados}/>
                        </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Acepto terminos y condiciones" onChange={() => setCondiciones(condiciones ? false : true)}/>
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Button type="submit">Aceptar</Button>
                    </Col>
                  </Row>
            </Form>
        </Row>
    </Container>
  )
  else {
    return (
        <Container className='container-boleto'>
            <Row className='justify-content-center'>
                <Col lg={5}>
                    <Boleto id={id}/> 
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Datos
/*

*/