import React from 'react';
import CardMoney from './Cards';
import {Container,Col} from 'react-bootstrap'


function CanHelp() {
  return (
    <div className = 'torn-paper'>
      <div >
        <img src = "https://image.freepik.com/free-vector/browen-torn-paper-transparent-background_1017-23481.jpg"
          width = "100%"
          height = "200px"
          alt="image1"/> 
      </div>
      <div className="canHelp">
        <Container fluid>
          <Col>
          <h2 > How You Can Help </h2>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
          <CardMoney/>
          </Col>
          
        </Container>
      </div>
      <div >
        <img className = "bottom-torn-paper"
          src = "https://image.freepik.com/free-vector/browen-torn-paper-transparent-background_1017-23481.jpg"
          width = "100%"
          height = "200px"
          alt="image2"/> 
    </div>
    </div>
  )
}

export default CanHelp;
