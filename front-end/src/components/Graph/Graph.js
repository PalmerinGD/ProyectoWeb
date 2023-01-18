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
import axios from 'axios'
const options = {
  title: "Alumnos por escuela"
}

function Graph({schools}) {
  const [school, setSchool] = useState(0)
  const [rol, setRol] = useState(0)
  const [presea, setPresea] = useState(0)
  const [datos, setDatos] = useState([])
  const [chartType, setChartType] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/total/persons?school_id=${school}&rol_id=${rol}&presea_id=${presea}`)
    .then(res => {
      console.log(res);
      const data = res.data.result;
      if(data.type === 1) {
        // Mostrar solamente confirmados y no confirmados
        setChartType('Bar')
        setDatos([
          ['Estatus', 'Total'],
          ['Confirmados', Number(data.total_user_confirmados)],
          ['No confirmados', Number(data.total_user_sin_confirmar)]
        ])
      }
      else if(data.type === 2) {
        setChartType('PieChart')
        setDatos([
          [`Estatus`, 'Total'],
          ['Confirmados', Number(data.total_user_confirmados)],
          ['No confirmados', Number(data.total_user_sin_confirmar)]
        ])
      }
      else if(data.type === 3) {
        setChartType('PieChart')
        setDatos([
          [`Estatus`, 'Total'],
          ['Confirmados', Number(data.total_user_confirmados)],
          ['No confirmados', Number(data.total_user_sin_confirmar)]
        ])
      }
      else if(data.type === 4) {
        setChartType('Bar')
        setDatos([
          [`Estatus`, 'Total'],
          ['Confirmados', Number(data.total_user_confirmados)],
          ['No confirmados', Number(data.total_user_sin_confirmar)]
        ])
      }
      else if(data.type === 5) {
        setChartType('Bar')
        setDatos([
          [`Estatus`, 'Total'],
          ['Confirmados', Number(data.total_user_confirmados)],
          ['No confirmados', Number(data.total_user_sin_confirmar)]
        ])
      }
    })
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
            </Row>
            <Row>
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
          {datos.length > 0 ? <Chart chartType={chartType} data={datos} options={options} width="100%" height="400px"/> : null}
        </Col>
      </Row>
    </Container>
  )
}

export default Graph