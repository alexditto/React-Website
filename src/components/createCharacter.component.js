import React from 'react';

import fighterMale from '../imgs/fighter-male.jpg';
import wizardMale from '../imgs/wizard-male.jpg';
import rogueMale from '../imgs/rogue-male.jpg';
import clericMale from '../imgs/cleric-male.png';
import fighterFemale from '../imgs/fighter-female.png';
import wizardFemale from '../imgs/wizard-female.jpg';
import rogueFemale from '../imgs/rogue-female.jpg';
import clericFemale from '../imgs/cleric-female.png';

import {
    Row,
    Col,
    Container,
    Button
} from 'reactstrap';

const CreateCharacter = ({character, setCharacter, characterName, setCharacterName}) => {
    
    const createCharacter = () => {
        if(character && characterName){
            let myHeaders = new Headers();
            let jwt = window.localStorage.getItem('jwt')
            myHeaders.append("Authorization", jwt)
            myHeaders.append("Content-Type", "application/json");
            
            let data = JSON.stringify({
                "character" : characterName,
                "type" : character
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: data,
            }
            
            fetch("http://localhost:5000/api/characters", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            
            setCharacter("")
            setCharacterName("")
            // window.location.replace("/characters")
        } else if (character) {
            return alert("Please NAME your hero.")
        } else if (characterName){
            return alert("Please CHOOSE a hero by clicking on the picture.")
        } else {
            return alert("Please CHOOSE and NAME your hero.")
        }
    }

    return (
        <Container id="newCharacters">
            <Row>
                <h2>Create Your Character</h2>
                <Col>
                    <input type="text" placeholder="Character Name" value={characterName} onChange={e=> setCharacterName(e.target.value)}></input>
                </Col>
                <Col>
                    {characterName} : {character}
                </Col>
                <Col>
                    <Button onClick={createCharacter}>Create Your Character</Button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <img src={fighterMale} alt="Fighter Male" onClick={e=> setCharacter("Fighter Male")}/>
                </Col>
                <Col>
                    <img src={wizardMale} alt="Wizard Male" onClick={e=> setCharacter("Wizard Male")}/>
                </Col>
                <Col>
                    <img src={rogueMale} alt="Rogue Male" onClick={e=> setCharacter("Rogue Male")}/>
                </Col>
                <Col>
                    <img src={clericMale} alt="Cleric Male" onClick={e=> setCharacter("Cleric Male")}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={fighterFemale} alt="Fighter Female" onClick={e=> setCharacter("Fighter Female")}/>
                </Col>
                <Col>
                    <img src={wizardFemale} alt="Wizard Female" onClick={e=> setCharacter("Wizard Female")}/>
                </Col>
                <Col>
                    <img src={rogueFemale} alt="Rogue Female" onClick={e=> setCharacter("Rogue Female")}/>
                </Col>
                <Col>
                    <img src={clericFemale} alt="Cleric Female" onClick={e=> setCharacter("Cleric Female")}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateCharacter
