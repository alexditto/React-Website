import React from 'react'

import {
    Container,
    Row,
    Col,
    Nav
} from "reactstrap"
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer" className="fixed-bottom"> 
            <Container className="text-right  mt-6" >
                <Row className="mb-3">
                    <Col lg="4" className="text-center">
                        <Nav className="mr-auto">Amature Dungeon Master</Nav>
                    </Col>
                    <Col lg="4" className="text-center">
                        <Row>
                            <Col>
                                <a href="https://github.com/alexditto"  target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.linkedin.com/in/alexander-ditto-0a69aa141/"  target="_blank" rel="noreferrer">
                                    <FaLinkedin />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://twitter.com/codingditto"  target="_blank" rel="noreferrer">
                                    <FaTwitterSquare />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer