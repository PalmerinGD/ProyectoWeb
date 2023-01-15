import React from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import FormLabel from 'react-bootstrap/esm/FormLabel'

const preseas = [
    {
      presea_id: 0,
      presea_name: 'Todas'
    },
    {
        presea_id: 1,
        presea_name: 'Juan'
    },
    {
      presea_id: 2,
      presea_name: 'Pedro'
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