import React from 'react'

import CreateCharacter from './createCharacter.component';

import {
    Container
} from 'reactstrap';

const Character = () => {
    return (
        <Container>
            <CreateCharacter />
            Hello from the character component
        </Container>
    )
}

export default Character
