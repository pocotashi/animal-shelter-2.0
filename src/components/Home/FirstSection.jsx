import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

function FirstSection() {
  return ( 
    <div className="imageOne">
    <Container >
    <Row >
    <Col > 
    <img className="imageOne" alt="topSection" src="https://images.unsplash.com/photo-1590634332992-b8b4a4b7ae47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80"/> 
    </Col> 
    </Row> 
    </Container>
    </div>

  )
}

export default FirstSection;



