import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";

import axios from "axios";
import UserInfo from "../components/UserInfo";
function Search() {
    const [schools, setSchools] = useState([]);
    const [results, setResults] = useState([]);
    const [user, setUser] = useState(null);

    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [escuela, setEscuela] = useState('');


    useEffect(()=>{
        axios.get('schools')
        .then(res => {
            const aux = [{id:-1, name:''}];
            for(const s of res.data.result) {
                aux.push({
                    id: s[0],
                    name: s[1]
                })
            }
            setSchools(aux)

        })
    },[])

    let offset = 0;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('rol/user?start=0&limit=2&rol=2')
        .then(res => {
            setResults(res.data.result)
        })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col sm={12} md={4}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" onChange={(e)=>setNombre(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4}>
                        <Form.Group>
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control type="text" onChange={(e)=>setApellidoP(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4}>
                        <Form.Group>
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control type="text" onChange={(e)=>setApellidoM(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Escuela</Form.Label>
                            <Form.Select defaultValue="...Choose" onChange={(e)=>setEscuela(e.target.value)}>
                                {schools.map(school => 
                                    <option key={school.name}>{school.name}</option>
                                )}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Rol</Form.Label>
                            <Form.Group>
                            <Form.Check inline type="radio" label="Alumno / Profesor"/>
                            <Form.Check inline type="radio" label="Autoridad"/>
                            </Form.Group>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Button type="submit">Buscar</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map(res => 
                                <tr key={res.person_name} onClick={()=>setUser(res)}>
                                    <td>{res.person_name}</td>
                                    <td>{res.person_surnamep}</td>
                                </tr>     
                            )}
                        </tbody>
                    </Table>
                    <UserInfo user={user} setUser={setUser}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Pagination>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;