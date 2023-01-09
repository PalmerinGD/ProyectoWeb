
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Spinner";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function Login({login, setLogin, show, setShow}) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/login', {
            "user_name": username,
            "user_password": password
        })
        .then(res => {
            console.log(res.data);
            if(res.status === 200) {
                setLogin({
                    user_name: res.data.result.user_name,
                    user_rol: res.data.result.user_rol_id
                })
            }
        })
        .catch(err => {
            console.log(err);
            setInvalid(true)
        })
    }

    const handleClose = () => {
        setInvalid(false)
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Por favor ingrese sus datos</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario:</Form.Label>
                    <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Ingrese su usuario"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Ingrese su password"/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="outline-secondary" onClick={()=>setShow(false)}>Cancel</Button>
                    <Button variant="primary" type="submit">Log in</Button>
            </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default Login;