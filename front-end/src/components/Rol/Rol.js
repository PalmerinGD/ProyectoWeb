import React from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import FormLabel from 'react-bootstrap/esm/FormLabel'

const roles = [
    {
        rol_id: 1,
        rol_name: 'Estudiante'
    },
    {
        rol_id: 2,
        rol_name: 'Profesor'
    },
    {
        rol_id: 0,
        rol_name: 'Todos'
    }
]
function Rol({rol, setRol}) {
    // Almacena todos los roles que se tienen en la base de datos
    return (
        <FormGroup>
            <FormLabel>Rol del usuario</FormLabel>
            <FormGroup>
                {roles.map(rol => (
                    <Form.Check name='rol' key={rol.rol_id} inline type="radio" label={rol.rol_name} onClick={() => setRol(rol.rol_id)}/>
                ))}
            </FormGroup>
        </FormGroup>
    )
}

export default Rol