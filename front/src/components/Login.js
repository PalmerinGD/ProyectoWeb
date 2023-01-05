import { useState } from "react";

import axios from 'axios';

import { FormLabel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FormControl, Input } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function Login({isOpen, onClose, login, setLogin}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/login', {
            "user_name": username,
            "user_password": password
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bienvenido, por favor ingrese sus datos</ModalHeader>
          <ModalCloseButton />
            <form onSubmit={handleSubmit} p={6}>
                    <ModalBody>
                    </ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' onChange={(e)=>setUsername(e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                    </FormControl>
                    <ModalFooter>
                        <Button variant='ghost' onClick={onClose}>Cerrar</Button>
                        <Button colorScheme='blue' mr={3} type="submit">
                            Log in
                        </Button>
                    </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    )
}

export default Login;