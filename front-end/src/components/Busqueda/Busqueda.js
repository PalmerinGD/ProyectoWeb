import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import { getByUserId } from '../../models/school'
import Search from '../Search/Search'

function Busqueda({token}) {
  const [school, setSchool] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getByUserId(token.user_id);
      setSchool(res.data.result)
    }
    fetch()
  }, [])
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <Search token={token} schools={school}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Busqueda