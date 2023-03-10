import React from 'react'
import Form from 'react-bootstrap/Form'


const opciones = [
    {
        option: "si",
        value : 1
    },
    {
        option: "no",
        value: 0
    }
]
function Discapacidad({ setDiscapacidad }) {
  return (
    <Form.Group>
        <Form.Label>Discapacidad</Form.Label>
        <Form.Select onChange={(e) => setDiscapacidad(e.target.value === 'si' ? 1 : 0)}>
            {opciones.map(aux => <option key={aux.option}>{aux.option}</option>)}
        </Form.Select>
    </Form.Group>
  )
}

export default Discapacidad