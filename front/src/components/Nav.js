import { useDisclosure } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

import Login from './Login';

function Nav({login, setLogin}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>Chakra App</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='1'>
                    <Button colorScheme='teal' onClick={onOpen}>Log in</Button>
                </ButtonGroup>
            </Flex>
            <Login isOpen={isOpen} onClose={onClose} login={login} setLogin={setLogin}/>
        </>
    )
}

export default Nav;