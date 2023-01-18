import PaginationB from 'react-bootstrap/Pagination'
import React from 'react'

function Pagination({registers, start, setStart}) {

  if(registers.length === 0) return null
  return (
    <PaginationB>
      <PaginationB.First onClick={() => setStart(0)}/>
      <PaginationB.Prev onClick={() => setStart(start > 0 ? start - 10 : 0)}/>
        {registers.map((r, i) => {
            if((i % 10 === 0 && i <= start + 40 && i >= start - 40) || i === 0) {
                return <PaginationB.Item key={i} onClick={() => setStart(i)} active={start === i ? true : false}>{(i  / 10)+ 1}</PaginationB.Item>
            }
            else if((i % 10 === 0 && i === start + 50)) return <PaginationB.Ellipsis/>
            else if((i % 10 === 0 && i === start - 50)) return <PaginationB.Ellipsis/>
            return null
        })}
        <PaginationB.Next onClick={() => setStart(start + 10 < registers.length ? start + 10 : start)}/>
        <PaginationB.Last onClick={() => setStart(registers.length > 10 ? (Math.floor(registers.length / 10)) * 10 : 0)}/>
    </PaginationB>
  )
}

export default Pagination