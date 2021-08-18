import React from 'react'
import { useState, useEffect } from 'react';

import Hero from './hero.component'

import {
    Row,
    Col,
    Container
} from 'reactstrap';

const CharacterList = ({characterName}) => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        fetchCharacters()
    }, [characterName])

    const fetchCharacters = async () => {
        let myHeaders = new Headers();
        let jwt = window.localStorage.getItem('jwt')
        myHeaders.append("Authorization", jwt);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/characters/all", requestOptions)
            .then(response => response.text())
            .then(result => setCharacters(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }

    const deleteCharacter = (id) => {
        var myHeaders = new Headers();
        let jwt = window.localStorage.getItem('jwt')
        myHeaders.append("Authorization", jwt)

        setCharacters(characters.filter((character)=> character._id !== id))

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`http://localhost:5000/characters/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Container>
            <Row>
                <h2>
                    Character List
                </h2>
            </Row>
            <Row>
                <Col>
                    {characters.map(character => <Hero hero={character} deleteCharacter={deleteCharacter}/>)}
                </Col>
            </Row>
        </Container>
    )
}

export default CharacterList
