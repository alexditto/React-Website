import React from 'react'
import { useState } from 'react';
import SignIn from './signIn.component';
import SignInInput from './signInInput.component';
import Register from './register.component';
import RegisterInput from './registerInput.component';

import { 
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';

import jumboImg from '../imgs/background.png'

const Home = ({setUser}) => {
    const [register, setRegister ] = useState(false)
    const [signIn, setSignIn ] = useState(false)

    const onClickRegister = () => {
        setRegister(!register)
    }
    
    const onClickSignIn = () => {
        setSignIn(!signIn)
    }

    if(!register && !signIn){
        return (
            <div>
                <Container style={{height: 500, width: 1000, backgroundImage: `url(${jumboImg})`, backgroundSize: 'cover', color: "#19191a"}} >
                    
                        <br />
                        <Row>
                            <h1> Are you ready to descend into the dungeon?</h1>
                        </Row>
                        <br />
                        <br />
                        <h3>The dungeon awaits ready for Heros seeking to prove themselves. </h3>
                        <h3>Create your account. Craft your hero. Traverse the dungeon. </h3>
                        <h3>   
                            Listen close. Can you hear it?
                            There awaits at the bottom of this dungeon a great monster. Will you be able to slay it?
                        </h3>
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <SignIn name="Sign In" onClickSignIn= {onClickSignIn}/>
                            </Col>
                            <Col>
                                <Register name="Register" onClickRegister = {onClickRegister} />
                            </Col>
                        </Row>
                   
                </Container>
                <Row className="mb-5"></Row>
                <Row className="mb-5"></Row>
            </div>
        )
    } else if (register) {
        return (
            <div>
                <Container style={{height: 500, width: 1000, backgroundImage: `url(${jumboImg})`, backgroundSize: 'cover'}} >
                    <Jumbotron>
                        <Row>
                            <h1> Home</h1>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                <Register name="Opps, I needed to Sign In." onClickRegister = {onClickRegister} />
                            </Col>
                        </Row>
                        <Row>
                            <RegisterInput setUser={setUser} />
                        </Row>
                    </Jumbotron>
                </Container>
                <Row className="mb-5"></Row>
                <Row className="mb-5"></Row>
            </div>
        )
    } else if (signIn){
        return (
            <div>
                <Container style={{height: 500, width: 1000, backgroundImage: `url(${jumboImg})`, backgroundSize: 'cover'}} >
                    <Jumbotron>
                        <Row>
                            <h1> Home</h1>
                        </Row>
                        <Row>
                            <Col>
                                <SignIn name="Opps, I need to register." onClickSignIn= {onClickSignIn}/>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <SignInInput setUser={setUser}/>
                        </Row>
                    </Jumbotron>
                </Container>
                <Row className="mb-5"></Row>
                <Row className="mb-5"></Row>
            </div>
        )
    }
}

export default Home
