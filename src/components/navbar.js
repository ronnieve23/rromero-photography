import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';


function Navigation(props) {
 
    return (
        <Navbar bg="dark" variant="dark" style={{ fontFamily: "monospace", fontSize:'xx-large'}} expand="lg" className="">
        <Navbar.Brand style={{ fontSize: "35px"}} className="mx-3">Ron Romero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/rromero-photography/home" >Home</Nav.Link>
                        <Nav.Link href="/rromero-photography/test">Test</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;