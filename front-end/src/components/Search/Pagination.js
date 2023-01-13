import PaginationB from 'react-bootstrap/Pagination'
import React from 'react'

function Pagination({registers, start, setStart}) {
  return (
    <PaginationB>
        {registers.map((r, i) => {
            if(i % 2 == 0) 
                return <PaginationB.Item key={i} onClick={() => setStart(i)}>{(i  / 2)+ 1}</PaginationB.Item>
            return null
        })}
    </PaginationB>
  )
}

export default Pagination