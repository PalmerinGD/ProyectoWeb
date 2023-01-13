import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {getAll} from '../../models/school';

function Schools({setSchool}) {

    const [schools, setSchools] = useState([])

    useEffect(() => {
        const fetch = async() => {
            const res = await getAll();
            setSchools(res.data.result)
        }
        fetch()
    })
    
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