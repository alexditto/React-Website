import React from 'react'
import { useState } from 'react';

import CharacterList from './characterList.component';
import CreateCharacter from './createCharacter.component';

import {
    Container
} from 'reactstrap';

const Character = () => {

    const [character, setCharacter] = useState("");
    const [characterName, setCharacterName] = useState("")

    return (
        <Container>
            <CharacterList characterName={characterName} />
            <CreateCharacter 
                character={character} 
                setCharacter={setCharacter} 
                characterName={characterName}
                setCharacterName={setCharacterName}
                />
        </Container>
    )
}

export default Character
