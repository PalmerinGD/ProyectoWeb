import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Graph from '../Graph/Graph'
import Search from '../Search/Search'

import { useState, useEffect } from 'react'

import { getAll } from '../../models/school';

function Dashboard({token}) {
  const [schools, setSchools] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await getAll();
      setSchools(res.data.result)
    }
    fetch()
  },[])
  return (
    <Container>
        <Row className='mt-5 mb-5 min-h-600'>
            <Col md={12} lg={6}><Search schools={schools} token={token}/></Col>
            <Col md={12} lg={6}><Graph schools={schools} /></Col>
        </Row>
    </Container>
  )
}

export default Dashboard