import React from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import FormLabel from 'react-bootstrap/esm/FormLabel'

const preseas = [
    {
      presea_id: 0,
      presea_name: 'TODAS'
    },
    {
      presea_id: 1,
      presea_name: 'DIPLOMA DE MAESTRO DECANO'
    },
    {
        presea_id: 2,
        presea_name: 'DIPLOMA A LA INVESTIGACION'
    },
    {
      presea_id: 3,
      presea_name: 'DIPLOMA A LA CULTURA'
    },
    {
      presea_id: 4,
      presea_name: 'JUAN DE DIOS BATIZ'
    },
    {
      presea_id: 5,
      presea_name: 'CARLOS VALLEJO MARQUEZ'
    },
    {
      presea_id: 6,
      presea_name: 'DIPLOMA A LA EFICIENCIA Y EFICACIA'
    }
]
function Presea({setPresea}) {
  return (
    <FormGroup>
      <FormLabel>Presea</FormLabel>
      <FormGroup>
        {preseas.map(presea => (
          <Form.Check name='presea' key={presea.presea_id} inline type="radio" label={presea.presea_name} onClick={()=>setPresea(presea.presea_id)}/>
        ))}
      </FormGroup>
    </FormGroup>
  )
}

export default Presea