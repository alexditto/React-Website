import React from 'react'

import fighterMale from '../imgs/fighter-male.jpg';
import wizardMale from '../imgs/wizard-male.jpg';
import rogueMale from '../imgs/rogue-male.jpg';
import clericMale from '../imgs/cleric-male.png';
import fighterFemale from '../imgs/fighter-female.png';
import wizardFemale from '../imgs/wizard-female.jpg';
import rogueFemale from '../imgs/rogue-female.jpg';
import clericFemale from '../imgs/cleric-female.png';
import doorIcon from "../imgs/door.png";
import resurrectionIcon from '../imgs/resurrection.png';
import deleteIcon from '../imgs/delete.png';

import {
    Row,
    Col,
    Container
} from 'reactstrap';

const Hero = ({hero, reviveCharacter, deleteCharacter}) => {
    let className = hero.alive ? "alive" : "dead"
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
    
    if(hero.alive){
        return (
            <Container id={hero._id} className={className}>
                <h3>
                    {hero.character}
                </h3>
                <Row>
                    <Col>
                        <img src = {imageSRC} class="heroImg img-thumbnail" alt= {hero.type} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                Hero Level: {hero.level}
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
                        <Row id="characterIcons">
                            <Col>
                                <img src={doorIcon} alt="Enter the Dungeon" className="icon" onClick={e=> playGame(hero._id)} />
                            </Col>
                            <Col>
                                <img src={deleteIcon} alt={`Delete ${hero.character}`} className="icon" onClick={e=> deleteCharacter(hero._id)} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container id={hero._id} className={className}>
                <h3>
                    {hero.character}
                </h3>
                <Row>
                    <Col>
                        <img src = {imageSRC} class="heroImg img-thumbnail" alt= {hero.type} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                Hero Level: {hero.level}
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
                        <Row id="characterIcons">
                            <Col>
                                <img src={doorIcon} alt="Enter the Dungeon" className="icon" onClick={e=> playGame(hero._id)} />
                            </Col>
                            <Col id="reviveIcon" className="align-me">
                                <img src={resurrectionIcon} alt="Resurrect Character" className="icon" onClick={e=> reviveCharacter(hero._id, hero)} />
                                <br className="text" />
                                <p className="text">
                                    Revive Character? It will reduce your character 2 levels.
                                </p>
                            </Col>
                            <Col>
                                <img src={deleteIcon} alt={`Delete ${hero.character}`} className="icon" onClick={e=> deleteCharacter(hero._id)} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Hero
