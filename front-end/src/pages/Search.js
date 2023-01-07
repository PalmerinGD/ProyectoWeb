import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { useEffect, useState } from "react";

import axios from "axios";
import UserInfo from "../components/UserInfo";
function Search() {
    const [schools, setSchools] = useState(null);
    const [results, setResults] = useState(null);
    const [user, setUser] = useState(null);


    return (
        <Container>
            <Form>
                <Row className="mb-3">
                    <Col sm={12} md={4}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4}>
                        <Form.Group>
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4}>
                        <Form.Group>
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Escuela</Form.Label>
                            <Form.Select defaultValue="Choose...">

                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col></Col>
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
                            <tr id="1" onClick={()=>setUser({
                                user_name: 'PALMERIN',
                                email: 'diegopalmerin2002@gmail.com',
                                school: 'Escuela Superior de Computo',
                                discapacity: false
                            })}>
                                <td>PALMERIN</td>
                                <td>Diego Palmerin Garcia</td>
                            </tr>
                            <tr>
                                <td>PALMERIN</td>
                                <td>Diego Palmerin Garcia</td>
                            </tr>
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