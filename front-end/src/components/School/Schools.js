import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {getAll} from '../../models/school';

function Schools({schools, setSchool}) {

  return (
    <Form.Group>
        <Form.Label>Escuela</Form.Label>
        <Form.Select>
            {schools.map(school => <option key={school.school_id} onClick={() => setSchool(school.school_id)}>{school.school_name}</option>)}
        </Form.Select>
    </Form.Group>
  )
}

export default Schools