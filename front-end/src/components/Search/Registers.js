import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

function Registers({registers, start}) {

  /*
  const [showedRegisters, setShowedRegisters] = useState(() => {
    let aux = []
    for(let i=0; i<1 && i < registers.length; i++) {
      console.log(registers[i]);
      aux.push(registers[i])
    }
    return aux;
  })
  console.log(showedRegisters);
  */


  return (
    <Table hover bordered>
      <thead>
        <tr className='text-center'>
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
        </tr>
      </thead>
      <tbody>
        {registers.map((r,i) => {
          if(i >= start && i < start + 2)
            return (
              <tr key={i}>
                <td>{r.person_name}</td>
                <td>{r.person_surnamep}</td>
                <td>{r.person_surnamem}</td>
              </tr>
            )
          else return null
        })}

      </tbody>

    </Table>
  )
}

export default Registers