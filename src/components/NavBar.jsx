import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'




function NavBar() {
  return ( 
    <header className="site-header">
  <Container >
    <Row >

    <Col className="nav-primary" >
    <Navbar bg = "light" expand = "lg" >
    <Container > {
      /* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> */
    } <Navbar.Collapse id = "basic-navbar-nav" >
    <Nav className = "ml-auto" >
    <Nav.Link href="/about"> ABOUT US </Nav.Link>
    <Nav.Link href = "/rescue" > RESCUE </Nav.Link> 
    <Nav.Link href = "/foster" > FOSTER </Nav.Link> 
    </Nav> 
    </Navbar.Collapse> 
    </Container> 
    </Navbar> 
    </Col> 
    <div className="title-area">
    <a href="/"><img className="Logo" alt="logo" src="Images/Logo.png" /> </a>

    </div>
    <Col className=" third-menu" > 
    <Navbar bg = "light" expand = "lg" >
    <Container > {
      /* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> */
    } <Navbar.Collapse id = "basic-navbar-nav" >
    <Nav className = "ml-auto" >
    <Nav.Link href = "/shop" > SHOP </Nav.Link> 
    <Nav.Link href = "/waystohelp" > WAYS TO HELP </Nav.Link> 
    <Button variant = "success" href="/donate"> Donate </Button> 
    </Nav> 
    </Navbar.Collapse> 
    </Container> 
    </Navbar> 
    </Col> 
    </Row>
    </Container>
    </header>

  )
}

export default NavBar;
