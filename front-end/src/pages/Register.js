import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

function Register({ login }) {

    const [nombre, setNombre] = useState('')
    const [apellidop, setApellidoP] = useState('')
    const [apellidom, setApellidoM] = useState('')
    const [personId, setPersonId] = useState(null)
    const [escuelaId, setEscuelaId] = useState('')
    const [email, setEmail] = useState('')
    const [discapacidad, setDiscapacidad] = useState(true)
    const [escuelas, setEscuales] = useState([])

    useEffect(()=> {
        axios.get('/schools')
        .then(res => {
            console.log(res.data);
            setEscuales(res.data.result)
        })
        axios.get(`/persons?user_id=${login.user_id}`)
        .then(res => {
            const user = res.data.result;
            setNombre(user.person_name)
            setApellidoP(user.person_surnamep)
            setApellidoM(user.person_surnamem)
            setPersonId(user.person_id)
        })
       
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('user', {
            user_id: login.user_id,
            person_id: personId,
            person_name: nombre,
            person_surnamep: apellidop,
            person_surnamem: apellidom,
            person_discapacity: discapacidad,
            user_email: email
        })
        .then(res => {
            console.log(res);
        })
    }

    const handleDownload = (e) => {
        axios.get('pdf')
        .then(res => console.log(res))
    }

    return (
        <Container className="min-vh-100 my-auto">
            <Row>

            </Row>
            <Row>
                <Col>
                    <h1>Verifique sus datos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Row className="mb-3">
                            <Form.Group>
                                <Form.Label>
                                    Nombre
                                </Form.Label>
                                <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} value={nombre || ''} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Apellido Paterno
                                    </Form.Label>
                                    <Form.Control type="text" onChange={(e) => setApellidoP(e.target.value)} value={apellidop || ''} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Apellido Materno
                                    </Form.Label>
                                    <Form.Control type="text" onChange={(e) => setApellidoM(e.target.value)} value={apellidom || ''} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={10}>
                                <Form.Group>
                                    <Form.Label>
                                        Escuela
                                    </Form.Label>
                                    <Form.Select>
                                        {escuelas.map(esc =>
                                            <option key={esc.school_name} onClick={() => setEscuelaId(esc.school_id)}>{esc.school_name}</option>
                                        )}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Discapacidad
                                    </Form.Label>
                                    <Form.Select onChange={(e) => setDiscapacidad(e.target.value === "Si" ? true : false)}>
                                        <option>Si</option>
                                        <option>No</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Correo electronico
                                    </Form.Label>
                                    <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Button type="submit">Aceptar</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <a href="http://localhost:80/proyecto_web_backend/pdf" target="_blank" download>Download</a>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default Register;