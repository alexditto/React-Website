import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row,
    Col
  } from 'reactstrap';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="navbar" color="light" light expand="md">
                <Container>
                    <Row>
                        <Col lg="2">
                            <Link to ='/home'><NavbarBrand>Dungeon Brawl</NavbarBrand></Link>
                        </Col>
                        <Col lg="8">
                            <NavbarToggler onClick={toggle} />
                                <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <Link to="/characters"><NavLink>Characters</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/dungeon"><NavLink>Dungeon</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/help"><NavLink>Help</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/alexditto/React-Website" target="_blank" rel="noreferrer">See the Code at GitHub</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Dungeons and Dragons
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <a href="https://orkerhulen.dk/onewebmedia/DnD%205e%20Players%20Handbook%20%28BnW%20OCR%29.pdf" target="_blank" rel="noreferrer">Player's Handbook</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a href="https://online.anyflip.com/ofsj/axvy/mobile/index.html#p=1" target="_blank" rel="noreferrer">Dungeon Master's Guide</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a href="https://online.anyflip.com/duex/ixpz/mobile/index.html#p=1" target="_blank" rel="noreferrer">Monster Manual</a>
                                        </DropdownItem>
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </Col>
                        <Col lg="auto">
                            <NavbarText className="float-right">Player's user name</NavbarText>
                        </Col>                    
                    </Row>
                </Container>
            </Navbar>
    )
}

export default AppNavbar
