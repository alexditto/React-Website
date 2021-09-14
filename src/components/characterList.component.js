import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Hero from './hero.component'

import {
    Row,
    Col,
    Container
} from 'reactstrap';

const CharacterList = ({characterName}) => {
    const history = useHistory();

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

        fetch("/api/characters/all", requestOptions)
            .then(response => response.text())
            .then(result => setCharacters(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }

    const reviveCharacter = (id, hero) => {
        console.log(`Character ${hero.character}`)
        let newLevel = hero.level >= 3 ? hero.level - 2 : 1;
        let myHeaders = new Headers();
        let jwt = window.localStorage.getItem('jwt')
        myHeaders.append("Authorization", jwt);
        myHeaders.append("Content-Type", "application/json");

        let data = {
            character: hero.character,
            hp : 10 + (newLevel * 5),
            type: hero.type,
            attack: hero.attack,
            armor: hero.armor,
            level : newLevel,
            xp: 3**newLevel,
            gold: hero.gold,
            inventory: hero.inventory,
            alive : true,
            victory : false
        }

        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body : JSON.stringify(data),
            redirect: 'follow'
          };

          fetch(`/api/characters/${id}`, requestOptions)
          .then(response => response.text())
          .then(result => {
            let path = "/dungeon"
            history.push(path)
          })
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
          
          fetch(`/api/characters/${id}`, requestOptions)
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
                    {characters.map(character => <Hero hero={character} reviveCharacter={reviveCharacter} deleteCharacter={deleteCharacter}/>)}
                </Col>
            </Row>
        </Container>
    )
}

export default CharacterList
