import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';



function Adoptables(){
    return (
    <div className="adoptables">
    <Container >
    <Row className="text-adopt">
    <Col><Nav.Link className="adopt-text" href="/adoptabledogs"><h1 >ADOPTABLE DOGS</h1>  </Nav.Link></Col>
    <Col><h1 >|</h1></Col>
    <Col><Nav.Link className="adopt-text" href="/adoptablecats"><h1 >ADOPTABLE CATS</h1>  </Nav.Link></Col>
  </Row>
  </Container>
    </div>
    )
}
export default Adoptables;
