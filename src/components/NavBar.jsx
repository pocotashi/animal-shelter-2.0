import React from 'react';
import  {Navbar, Container, Nav, Button} from 'react-bootstrap';


function NavBar() {
  return ( 
    
      <Container>
        <Navbar collapseOnSelect expand="md" bg="white" variant="light" sticky="top">
          <Navbar.Brand href="/"><img class="logo align-middle" src='./Images/logo2.svg' alt="brand logo"  /></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link className="mx-4"href="/about"> ABOUT US </Nav.Link>
                <Nav.Link className="mx-4"href = "/rescue" > RESCUE </Nav.Link> 
                <Nav.Link className="mx-4"href = "/foster" > FOSTER </Nav.Link>
                <Nav.Link className="mx-4"href = "/shop" > SHOP </Nav.Link> 
                <Nav.Link className="mx-4"href = "/waystohelp" > WAYS TO HELP </Nav.Link> 
              </Nav>
              <Button className="mx-4" variant = "success" href="/donate"> Donate </Button>       
            </Navbar.Collapse>
        </Navbar>
      </Container>
  )
}

export default NavBar;
