import React from 'react'; 
// import { Navbar, Nav} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import "./Nav.css";

export const NavBar = () =>{
  return(
    <Navbar className="NavBar" expand="lg" fluid="md">
      <Container className="NavContainer"  >
    
        <Nav className="me-auto">
        <Navbar.Brand>
        <img className="Logo" src={require('./LogoMakr-4KLZXb.png')} 
          alt="logo"/>
        </Navbar.Brand>
          <Nav.Link className="Navlink" href="" >About</Nav.Link>
          <Nav.Link className="Navlink" href="">Projects</Nav.Link>
          <Nav.Link className="Navlink" href="">Contact</Nav.Link>
          <Nav.Link className="Navlink" href="">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

