import axios from 'axios';
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup'

import { HiOutlineCheckCircle } from "react-icons/hi";

import './boleto.css'

function Boleto({ id }) {
  return (
    <Card className='m-auto tam'>
        <Card.Body>
            <Card.Title className='text-center'><h2>Confirmacion exitosa</h2></Card.Title>
            <Card.Text>
                <span className='d-block text-center confirmacion-icon text-success mb-3'><HiOutlineCheckCircle/></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus. Quisque id diam vel quam elementum pulvinar. Quam nulla porttitor massa id neque. Et leo duis ut diam quam nulla porttitor. Facilisi morbi tempus iaculis urna id volutpat lacus. Amet justo donec enim diam vulputate ut pharetra sit. Nam libero justo laoreet sit amet cursus sit amet. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Lacus suspendisse faucibus interdum posuere. Pharetra pharetra massa massa ultricies. Convallis aenean et tortor at risus viverra adipiscing.
            </Card.Text>
            <ListGroup className='list-group-flush'>
                <ListGroup.Item>
                    <a className='d-block m-auto' href={`http://localhost:80/proyecto_web_backend/generatePDF?person_id=${id}`}>Descargar</a>
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
  )
}

export default Boleto