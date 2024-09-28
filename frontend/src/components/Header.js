import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function header(){
    return(
        <div>
        <Navbar  fixed="top" style={{background:"#e3f2fd"}}>
            <Container>
                <Navbar.Brand href="/">Resume Maker</Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="#templates">Templates</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link><p style={{marginTop:'10px'}}>/</p><Nav.Link href="/register">Signup</Nav.Link> 
                </Nav>
            </Container>
        </Navbar>        
        </div>
    )
}