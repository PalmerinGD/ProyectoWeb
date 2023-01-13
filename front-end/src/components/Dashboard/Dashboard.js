import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Search from '../Search/Search'

function Dashboard() {
  return (
    <Container>
        <Row>
            <Col><Search/></Col>
        </Row>
    </Container>
  )
}

export default Dashboard