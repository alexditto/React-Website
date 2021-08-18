import React from 'react'

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

const Hero = ({hero, deleteCharacter}) => {
    let className = hero.alive ? "hero" : "dead"
    let imageSRC = hero.type === "Fighter Male" ? fighterMale :
        hero.type === "Wizard Male" ? wizardMale :
        hero.type === "Rogue Male" ? rogueMale :
        hero.type === "Cleric Male" ? clericMale :
        hero.type === "Fighter Female" ? fighterFemale :
        hero.type === "Wizard Female" ? wizardFemale :
        hero.type === "Rogue Female" ? rogueFemale : 
        hero.type === "Cleric Female" ? clericFemale
        : ""

    const playGame = (id) => {
        localStorage.setItem('character', id)
        window.location.replace('/dungeon')
    }
    return (
        <Container id={hero._id} className={className}>
            <h3>
                {hero.character}
            </h3>
            <Row>
                <Col>
                    <img src = {imageSRC} class="img-thumbnail" alt= {hero.type} />
                </Col>
                <Col>
                    Hero HP: {hero.hp}
                </Col>
                <Col>
                    Hero Gold: {hero.gold}
                </Col>
                <Col>
                    Hero XP: {hero.xp}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={e=> playGame(hero._id)}>Play</Button>
                </Col>
                <Col>
                    <Button  onClick={e=> deleteCharacter(hero._id)}>Delete</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
