import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Table from 'react-bootstrap/Table'

const registersx = [
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
  {
    person_name: 'Diego',
    person_surnamep: 'Palmerin',
    person_surnamem: 'Garcia'
  },
]
function Registers({registers, start, setEntity}) {


  return (
    <Container fluid className='bg-light'>
      <Row>
        <Col className="p-0 tableContainer">
          <Table hover bordered className='bg-light table'>
            <thead className='th'>
              <tr className='text-center'>
                <th className='bg-light'>Nombre</th>
                <th className='bg-light'>Apellido Paterno</th>
                <th className='bg-light'>Apellido Materno</th>
              </tr>
            </thead>
            <tbody>
              {registersx.map((r, i) => {
                if (i >= start)
                  return (
                    <tr key={i} onClick={() => setEntity(r)}>
                      <td>{r.person_name}</td>
                      <td>{r.person_surnamep}</td>
                      <td>{r.person_surnamem}</td>
                    </tr>
                  )
                else return null
              })}

            </tbody>

          </Table>
        </Col>
      </Row>

    </Container>
  )
}

export default Registers