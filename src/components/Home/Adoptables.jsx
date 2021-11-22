import React from 'react';
import { Container, Row, } from 'react-bootstrap';




function Adoptables(){
    return (
      <div className="adoptables ">
        <Container>
          <Row className="text-adopt">
          <span class="left"><a href="/adoptabledogs">ADOPTABLE DOGS</a></span>
          <span class="right"><a href="/adoptablecats">ADOPTABLE CATS</a></span>
          </Row>
        </Container>
    </div>
    )
}
export default Adoptables;
