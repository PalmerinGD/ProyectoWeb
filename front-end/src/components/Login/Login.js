// Hooks de react
import { useState } from "react";

// Componentes de Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Funciones para llamar a la api
import { login } from "./token";

function Login({token, setToken, show, setShow}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Se utiliza para hacer la animacion de carga
    const [post, setPost] = useState(false);

    const [invalid, setInvalid] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setPost(true)
        const res = await login(username, password)
        if(res) {
            const result = res.data.result
            setToken({
                user_id: result.user_id,
                user_name: result.user_name,
                user_rol: result.user_rol_id,
            })
            setPost(false)
            setShow(false)
        }
        else {
            setPost(false)
            setInvalid(true)
        }
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
                    {invalid &&
                        <Form.Group className="text-center">
                            Usuario o password incorrectos
                        </Form.Group>
                    }
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Ingrese su usuario" disabled={post} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Ingrese su password" disabled={post} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShow(false)} disabled={post}>Cancelar</Button>
                    <Button variant="primary" type="submit" disabled={post}>{post ? "Loading" : "Aceptar"}</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default Login;