import React from 'react'
import { useState } from 'react';

import CharacterList from './characterList.component';
import CreateCharacter from './createCharacter.component';

import {
    Container,
    Col
} from 'reactstrap';

const Character = () => {

    const [character, setCharacter] = useState("");
    const [characterName, setCharacterName] = useState("")

    return (
        <Container>
            <Col>
                <CharacterList characterName={characterName} />
            </Col>
            <Col>
                <CreateCharacter 
                    character={character} 
                    setCharacter={setCharacter} 
                    characterName={characterName}
                    setCharacterName={setCharacterName}
                    />
            </Col>
                <br />
                <br />
        </Container>
    )
}

export default Character
