import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Chart } from 'react-google-charts'
import Schools from '../School/Schools'
import Rol from '../Rol/Rol'
import Presea from '../Presea/Presea'
import { GoGraph, GoNote } from "react-icons/go";
const options = {
  title: "Alumnos por escuela"
}

function Graph({schools}) {
  const [school, setSchool] = useState('')
  const [rol, setRol] = useState('')
  const [presea, setPresea] = useState('')
  const [datos, setDatos] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    if(school === '0') {
    }
    else {
      setDatos([
        ["Escuela", "Total de confirmados"],
        ["CECyT #3", 4],
        ["ESCOM", 10],
        ["UPICSSA", 30],
        ["Otros", 10]
      ])
    }
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h3>
            Grafica{' '} <GoGraph/>
          </h3>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col>
                <Schools schools={schools} setSchool={setSchool}/>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col md={12} lg={6}>
                <Rol setRol={setRol}/> 
              </Col>
              <Col>
                <Presea setPresea={setPresea}/>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col className='d-flex justify-content-end'>
                <Button type="submit" className='m-2'>Generar <GoNote/></Button>
                <Button className='m-2' variant="secondary" onClick={() => setDatos([])}>Limpiar</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          {datos.length > 0 ? <Chart chartType='PieChart' data={datos} options={options} width="100%" height="400px"/> : null}
        </Col>
      </Row>
    </Container>
  )
}

export default Graph