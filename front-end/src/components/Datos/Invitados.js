import React from 'react'
import Form from 'react-bootstrap/Form'

const opciones = [
    0,1,2,3
]

function Invitados({ setNumeroInvitados }) {
  return (
    <Form.Group>
        <Form.Label>Numero de invitados</Form.Label>
        <Form.Select onChange={(e) => setNumeroInvitados(e.target.value)}>
            {opciones.map(aux => <option key={aux}>{aux}</option>)}
        </Form.Select>
    </Form.Group>
  )
}

export default Invitados