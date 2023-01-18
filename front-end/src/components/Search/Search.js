import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import Rol from '../Rol/Rol'
import Schools from '../School/Schools'
import Button from 'react-bootstrap/esm/Button'
import Registers from './Registers'
import axios from 'axios'


import Pagination from './Pagination'
import Modal from './Modal'
import {FaSearch} from 'react-icons/fa'
import { GoSearch } from "react-icons/go";

function Search({schools, token}) {

    const [nombre, setNombre] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [school, setSchool] = useState(0)
    const [rol, setRol] = useState(0)

    const [registers, setRegisters] = useState([])
    const [start, setStart] = useState(0)

    const [entity, setEntity] = useState(null)
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(school);
        axios.get(`/rol/user?nombre=${nombre}&surnamep=${apellidoPaterno}&surnamem=${apellidoMaterno}&school_id=${school}&rol_id=${rol}`)
        .then(res => {
            //setRegisters(res.data.result)
            console.log(res.data);
            const aux = res.data.result
            let data = []
            for(let i=0; i<res.data.result.length; i++) {
                if(aux[i].user_id !== token.user_id) {
                    data.push(aux[i]);
                }
            }
            setRegisters(data)
        })
    }

    const handleClean = () => {
        setNombre('')
        setApellidoPaterno('')
        setApellidoMaterno('')
        setRegisters([])
        setStart(0)
        setEntity(null)
    }
  return (
    <Container className='mt-5 mb-5'>
        <Row>
            <Col className='text-center'>
                <h3>
                      Busqueda{' '}<FaSearch />
                </h3>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Form onSubmit={(e) => handleSearch(e)}>
                <Row>
                    <Col md={12} lg={4}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>     
                            <Form.Control  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        </Form.Group> 
                    </Col>
                    <Col md={12} lg={4}>
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
                <Row className='mt-2'>
                    <Col md={12} lg={6}>
                        <Rol setRol={setRol}/>
                    </Col>
                    <Col>
                        <Schools schools={schools} setSchool={setSchool}/>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col className='d-flex justify-content-end'>
                        <Button type="submit" className='m-2'>Buscar <GoSearch/></Button>
                        <Button className='m-2' variant='secondary' onClick={() => handleClean()}>Limpiar</Button>
                    </Col>
                </Row>
            </Form>
        </Row>
        <Row className='mt-2'>
            <Col>
                <Registers registers={registers} start={start} setEntity={setEntity}/>
                <Modal entity={entity} setEntity={setEntity}/>
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