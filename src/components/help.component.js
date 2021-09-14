import React from 'react'
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    TabContent,
    TabPane,
    Card, 
    Button,
    CardTitle,
    CardText,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import classnames from "classnames";
import traversy from '../imgs/traversyMedia.png';
import webDev from '../imgs/webDevSimplified.png';
import freeCode from '../imgs/freeCodeCamp.png';
import fireship from '../imgs/fireship.png';

const Help = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const history = useHistory();

    const resumePage = () => {
        let path = '/resume'
        history.push(path)
    }

    return (
        <Container className="mt-4">
            <Nav tabs>
                <NavItem >
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Game Help
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Questions About the Code
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Container className="mt-4">
                        Hey, thanks for checking out my game. I will run you through how it works. 
                        <br />
                        <br />
                        Are you ready to dive into the dungeon and take on some monsters that you may see in your Dungeons and Dragons campain. The only difference is that you are on your own now. No one to help you fight the dragon that hinds in this dungeon.
                        <br />
                        <br />
                        Start by creating a character. It will start at level one. Then, take that character to the dungeon and start fighting monsters. Defeating monster will give you experience and gold. But BEWARE. If the monster kills your character, their journy will come to an end. Don't be greedy and run when you need to. 
                        <br />
                        <br />
                        So take heart! Get some gold, buy some potions, equip you best items, and dive as deep as you dare. Are you brave enough to reach level 20!
                        <Row className="mb-5"></Row>
                        <Row className="mb-5"></Row>
                    </Container>
                </TabPane>
                <TabPane tabId="2">
                    <Container id="helpCards" className="mb-12">
                        <Row className="justify-content-center mt-2">
                            <Col lg="8">
                                <Card body>
                                    <CardTitle> See the Raw Code?</CardTitle>
                                    <CardText>
                                        This website is a MERN Stack. I constructed the front-end using Reactstrap. The back-end utilizes JSON Web Tokens. A sample of the raw code is available at GitHub.
                                        I deployed the site using EC2 instance on the AWS platform wiht Nginx as my web server.
                                    </CardText>
                                    <Button href="https://github.com/alexditto/React-Website" target="_blank" rel="noreferrer">See the Code</Button>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-2">
                            <Col lg="8">
                                <Card body>
                                    <CardTitle> See the Developer?</CardTitle>
                                    <CardText>Thanks for thinking about me. 
                                        I started as a self-taught coder utilizing <a href="https://teamtreehouse.com/" target="_blank" rel="noreferrer">Treehouse</a> platform. 
                                        I then tested into the <a href="https://www.launchcode.org/" target="_blank" rel="noreferrer">LaunchCode</a> internship program. 
                                        I have been working since 2020 as a Jr Developer. Currenlty, I generally work with the MERN or MEAN stack, though I have written some programs in Python.
                                        I also am fluent in SuiteScript, the JavaScript-like language that is utilized on the <a href="https://www.netsuite.com/portal/home.shtml" target="_blank" rel="noreferrer">NetSuite</a> SAAS.</CardText>
                                    <Button onClick={e=>resumePage()}>See My Stylish Resume</Button>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-2 mb-5">
                            <Col lg="8">
                                <Card body>
                                    <CardTitle> Want to Learn?</CardTitle>
                                    <CardText>Did you just find this page by chance? Are you looking to learn how to code? 
                                        Do you like YouTube? Because, you know, YouTube will teach you how to code.
                                        I have some links bellow to some of my favorite Coding educators that helped me learn how to code.
                                        If you are just starting off or looking to wade into a new language, the following educators migth be helpful.</CardText>
                                    <Container id="codeImgLinks">
                                        <Row>
                                            <Col>
                                                <a href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noreferrer">
                                                    <img class="card-img-bottom img-thumbnail" src={traversy} alt="Traversy Media" ></img>
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://www.youtube.com/c/WebDevSimplified" target="_blank" rel="noreferrer">
                                                    <img class="card-img-bottom img-thumbnail" src={webDev} alt="Web Dev Solutions"></img>
                                                </a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <a href="https://www.youtube.com/c/Freecodecamp" target="_blank" rel="noreferrer">
                                                    <img class="card-img-bottom img-thumbnail" src={freeCode} alt="Free Code Camp"></img>
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://www.youtube.com/c/Fireship" target="_blank" rel="noreferrer">
                                                    <img class="card-img-bottom img-thumbnail" src={fireship} alt="Fireship"></img>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-5"></Row>
                    </Container>
                </TabPane>
            </TabContent>
        </Container>
    )
}

export default Help
