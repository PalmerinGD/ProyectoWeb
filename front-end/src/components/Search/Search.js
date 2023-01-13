import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import Rol from './Rol'
import Schools from './Schools'
import Button from 'react-bootstrap/esm/Button'
import Registers from './Registers'
import axios from 'axios'


import Pagination from './Pagination'
import {FaSearch} from 'react-icons/fa'

function Search() {

    const [nombre, setNombre] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [school, setSchool] = useState('')
    const [rol, setRol] = useState('')

    const [registers, setRegisters] = useState([])
    const [start, setStart] = useState(0)
    const handleSearch = (e) => {
        e.preventDefault()
        if(school) {
            axios.get(`/school`)
        }
        axios.get(`/rol/user?nombre=${nombre}&surnamep=${apellidoPaterno}&surnamem=${apellidoMaterno}&school_id=${school}&rol_id=${rol}`)
        .then(res => {
            setRegisters(res.data.result)
        })
    }
  return (
    <Container className='mt-5'>
        <Row>
            <Col className='text-center'>
                <h3>
                      Busqueda{' '}<FaSearch />
                </h3>
            </Col>
        </Row>
        <Row>
            <Form onSubmit={(e) => handleSearch(e)}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>     
                            <Form.Control  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Apellido Paterno</Form.Label>     
                            <Form.Control  type="text" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)}/>
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Apellido Materno</Form.Label>     
                            <Form.Control  type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)}/>
                        </Form.Group> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Rol setRol={setRol}/>
                    </Col>
                    <Col>
                        <Schools setSchool={setSchool}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit">Buscar</Button> 
                    </Col>
                </Row>
            </Form>
        </Row>
        <Row>
            <Col>
                <Registers registers={registers} start={start}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Pagination registers={registers} start={start} setStart={setStart}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Search