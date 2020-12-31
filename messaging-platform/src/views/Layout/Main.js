import React from 'react';
import { Button } from 'react-bootstrap';

import Logo from '../../assets/logo.svg'

import { Navbar, Form, Nav, NavDropdown, Image } from 'react-bootstrap';
import { ChatDotsFill, Plus, BellFill, GearFill } from 'react-bootstrap-icons';

import "./Main.scss";

const Main = ({
    children
}) => {
    
    return (
        <div className="main-layout-wrapper">
            <Navbar className="navbar" sticky="top">
                <Navbar.Collapse>
                    <Navbar.Brand className="navbar-logo-image" href="/">
                        <Image src={Logo} fluid />
                    </Navbar.Brand>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="main-layout-search"/>
                    </Form>
                </Navbar.Collapse>
                <Nav className="mr-auto">
                    <Button className="main-layout-add-btn">
                        <Plus className="plus-icon"/>
                    </Button>
                    <Button className="main-layout-notification-btn">
                        <BellFill/>
                    </Button>
                    <Button className="main-layout-settings-btn">
                        <GearFill/>
                    </Button>
                </Nav>
            </Navbar>
           {children}
        </div>
    )
}

export default Main;