import React from 'react'

import { Container, Row, Col } from 'reactstrap';

const Resume = () => {
    return (
        <Container className="help">
            <Row>
                <Col>
                    <h1 className="help">Alexander Ditto</h1>
                </Col>
                <Col>
                </Col>
                <Col className="text-right float-right">
                    <img className="launchcode float-right" src="/images/launchcode.jpg" alt="Launch_Code" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="help">
                    SOFTWARE ENGINEER IN ST. LOUIS, MO
                    </p>
                    <p className="help mb-1">
                        PHONE 636-253-2628 | EMAIL <a href="mailto:alexdittocareer@gmail.com?subject=About your website">alexdittocareer@gmail.com</a>
                    </p>
                    <p className="help">
                    GITHUB <a href="https://github.com/alexditto" target="_blank" rel="noreferrer">alexditto</a>
                     | LINKEDIN <a href="https://www.linkedin.com/in/alexander-ditto-0a69aa141/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/alexander-ditto-0a69aa141/</a>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="help mt-4">
                        AWS Experience
                    </p>
                    <Row>
                        <Col className="help">
                            •EC2 
                        </Col>
                        <Col className="help">
                            •S3
                        </Col>
                        <Col className="help">
                            • Lambda
                        </Col>
                        <Col className="help">
                            • Ubuntu
                        </Col>
                        <Col className="help">
                            • Nginx
                        </Col>        
                    </Row> 
                </Col>
            </Row>
            <br />
            <Row>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col" className="help">LANGUAGES</th>
                        <th scope="col" className="help">FRAMEWORKS</th>
                        <th scope="col" className="help">DATABASES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <Row>
                                    <Col className="help">
                                        Node
                                    </Col>
                                    <Col className="help">
                                        CSS
                                    </Col>
                                    <Col className="help">
                                        JavaScript
                                    </Col>
                                </Row>
                            </th>
                            <td>
                                <Row>
                                    <Col className="help">
                                        React
                                    </Col>
                                    <Col className="help">
                                        Angular
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                <Row>
                                    <Col className="help">
                                        MongoDB
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Row>
                                    <Col className="help">
                                        PHP
                                    </Col>
                                    <Col className="help">
                                        HTML5
                                    </Col>
                                    <Col className="help">
                                        SuiteScript
                                    </Col>
                                </Row>
                            </th>
                            <td>
                                <Row>
                                    <Col className="help">
                                        JQuery
                                    </Col>
                                    <Col className="help">
                                        Express
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                <Row>
                                    <Col className="help">
                                        NetSuite
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Row>
                                    <Col className="help">
                                        TypeScript
                                    </Col>
                                    <Col className="help">
                                        Python
                                    </Col>
                                    <Col className="help">
                                        NativeScript
                                    </Col>
                                </Row>
                            </th>
                            <td>
                                <Row>
                                    <Col className="help">
                                        Bootstrap
                                    </Col>
                                    <Col className="help">
                                        Pug/Jade
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                <Row>
                                    <Col className="help">
                                        MySQL
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Row>
                                    <Col className="help">
                                        Node
                                    </Col>
                                    <Col className="help">
                                        Git
                                    </Col>
                                    <Col className="help">
                                        
                                    </Col>
                                </Row>
                            </th>
                            <td>
                                <Row>
                                    <Col className="help">
                                        Reactstrap
                                    </Col>
                                    <Col className="help">
                                        Docker
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                <Row>
                                    <Col className="help">
                                        Elasticsearch
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Row>
            <Row>
                <p class="h3 text-center help helpCat">Project Experience</p>
            </Row>
            <Row>
                <Col>
                    <h5 className="help">
                        Automated Proposal System — NetSuite Build Automated System
                    </h5>
                    <h6 className="help">
                        Estimated value – 1.8 million in added sales.
                    </h6>
                    <ul>
                        <li className="help">
                            I utilized the NetSuite SAAS framework to capture user input to produce dynamically generated proposals. The program cycles through existing buildings in the database and produces proposals with dynamic pricing based on jurisdiction information.
                        </li>
                        <li className="help">
                            The users can manipulate the pricing, inspection cycles, and special charges and discounts at the global level all the way to the particular device.
                        </li>
                        <li className="help">
                            The program sources from five different record types with over one thousand data points for every produced proposal. Scalability was the primary focus of the program and has been able to scale from producing under forty proposals a month to over three thousand in a month.
                        </li>
                        <li className="help">
                            The program is written in the NetSuite language which is JavaScript like. The code is comparable to ES6. Due to the nature of consolidating information from multiple records while building the proposal, it is a Functional Programming approach.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 className="help">
                        Signature Capture Integration — Node.js and Express Website
                    </h5>
                    <h6 className="help">
                        Estimated value – 700 thousand in saved sales.
                    </h6>
                    <ul>
                        <li className="help">
                            The main focus of the website is to capture signatures in the field and have them save into the database automatically. I utilized open-source signature capture code and adapted it to capture and send svg files.
                        </li>
                        <li className="help">
                            I built out an API to receive the svg file and redirect it to the NetSuite database by creating an integration point. I then wrote a RESTlet, NetSuite’s external API, to receive and save that package.
                        </li>
                        <li className="help">
                            I deployed the application to an EC2 server. I use PM2 to handle the load balancing and Nginx to run the server.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 className="help">
                    Dungeon Brawl — MERN Dungeons and Dragons Inspired Combat Game
                    </h5>
                    <ul>
                        <li className="help">
                            Engineered a React based application that allows a player to adventure from level one to twenty.
                        </li>
                        <li className="help">
                            Designed a multi-leveled combat system that randomly populates a monster from an array based on the player’s level.
                        </li>
                        <li className="help">
                            Implemented HTML, CSS, JavaScript, React, Node, Express, MongoDB, Reactstrap, and Bootstrap. An alternate version using only raw JavaScript is available.
                        </li>
                        <li className="help">
                            Deployed using AWS EC2 running a Ubuntu instance. I also utilized Nginx and Docker for deployment.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <p class="h3 text-center help helpCat">Work Experience</p>
            </Row>
            <Row>
                <Col>
                    <h5 className="help">
                        Software Developer, ATIS Elevator Inspections
                    </h5>
                    <h6 className="help">
                        St. Louis, February 2020
                    </h6>
                    <ul>
                        <li className="help">
                        Provided support to various software and services including the SAAS, NetSuite. NetSuite uses a JavaScript like REST API and a SQL based database.
                        </li>
                        <li className="help">
                            Develop new applications and expand the functionality of NetSuite through original coding and integrations.
                        </li>
                        <li className="help">
                        Maintain NetSuite’s relational database through CSV uploads and data-grooming.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <p class="h3 text-center help helpCat">Education</p>
            </Row>
            <Row>
                <Col>
                    <h5 className="help">
                        The Southern Baptist Theological Seminary
                    </h5>
                    <h6 className="help">
                        Th.M in Philosophy — 2017, Advanced M.Div— 2016 
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 className="help">
                        LaunchCode
                    </h5>
                    <h6 className="help">
                        Mentorship Program— 2020
                    </h6>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <h1 className="text-center">You found the Ditto!!!</h1>
            </Row>
            <Row>
                <Col>
                {/* <img className="float-right" id="ditto" src="/images/ditto.png" alt="Ditto" /> */}
                </Col>
            <img className="float-right" id="ditto" src="/images/ditto.png" alt="Ditto" />
            </Row>
            <br />
            <br />
            <br />
            <br />
        </Container>
    )
}

export default Resume
