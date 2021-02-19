import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import { logout } from '../../utils/authFunctions';
import UploadPicture  from '../User/PictureUpload/UploadPicture'
import Logo from '../../assets/logo.svg';

import { Navbar, Form, Nav, DropdownButton, Image, Dropdown } from 'react-bootstrap';
import { ChatDotsFill, Plus, BellFill, GearFill } from 'react-bootstrap-icons';

import "./Main.scss";
import { useHistory } from 'react-router';

const Main = ({
    children, 
}) => {

    /*<Button className="main-layout-settings-btn" onClick={logout}>
        <GearFill />
    </Button>*/
    const[isOpen, setIsOpen] = useState(false);
    const handleToggleModal = () => {
        console.log('open up bitch');
        setIsOpen(true);
    }
    const history = useHistory();
    function handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
        if(selectedKey == 1){
            handleToggleModal();
        }
      }
    return (
        <div className="main-layout-wrapper">
            <Navbar className="navbar" sticky="top">
                <Navbar.Collapse>
                    <Navbar.Brand className="navbar-logo-image" href="/">
                        <Image src={Logo} fluid />
                    </Navbar.Brand>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="main-layout-search" />
                    </Form>
                </Navbar.Collapse>
                <Nav className="mr-auto">
                    <DropdownButton
                        className="main-layout-add-btn"
                        menuAlign={{ lg: 'right' }}
                        variant={'primary'}
                        title={<Plus />}
                    >
                    </DropdownButton>
                    <DropdownButton
                        className="main-layout-notification-btn"
                        menuAlign={{ lg: 'right' }}
                        variant={'primary'}
                        title={<BellFill />}
                    >
                    </DropdownButton>
                    <DropdownButton
                        className="main-layout-settings-btn"
                        menuAlign={{ lg: 'right' }}
                        variant={'primary'}
                        title={<GearFill />}
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="1" >Upload picture</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={logout}>Logout</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar>
        
            {children}   
        </div>
    )
}

export default Main;