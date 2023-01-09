import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";

function Register({ login }) {
    const [nombre, setNombre] = useState('')
    const [apellidop, setApellidoP] = useState('')
    const [apellidom, setApellidoM] = useState('')
    const [escuela, setEscuela] = useState('')
    const [email, setEmail] = useState('')
    const [discapacidad, setDiscapacidad] = useState('')

    useEffect(()=> {
        
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Container className="my-auto">
            <Row>
                <Col>
                    <h1>Verifique sus datos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>
                                Nombre
                            </Form.Label>
                            <Form.Control type="text" onChange={(e) => setNombre(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Apellido Paterno
                            </Form.Label>
                            <Form.Control type="text" onChange={(e) => setApellidoP(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Apellido Materno
                            </Form.Label>
                            <Form.Control type="text" onChange={(e) => setApellidoM(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Escuela
                            </Form.Label>
                            <Form.Control type="text" onChange={(e) => setEscuela(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Correo electronico
                            </Form.Label>
                            <Form.Control type="text" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Discapacidad
                            </Form.Label>
                            <Form.Select onChange={(e) => setDiscapacidad(e.target.value === "Si" ? true : false)}>
                                <option>Si</option>
                                <option>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit">Aceptar</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;