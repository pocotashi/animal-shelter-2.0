import React from 'react';
import Card from 'react-bootstrap/Card';
import {CardGroup} from 'react-bootstrap';
import {FaPaypal, FaPatreon, FaShoppingBag, IoLogoVenmo} from 'react-icons/all';


const fontStyles = {fontSize: "150px"}; 
function CardMoney() {
  return ( 
  <CardGroup className="m-auto">
    <Card bg="yellow" style={{width: '18rem'}} >
      <Card.Body >
        <Card.Title> <p>Donate via paypal.</p> </Card.Title> 
        <Card.Text > <FaPaypal style={fontStyles}/></Card.Text> 
      </Card.Body> 
    </Card> 
    <Card style={{width: '18rem'}} >
      <Card.Body >
        <Card.Title > <p>Donate via Venmo</p> </Card.Title> 
        <Card.Text ><IoLogoVenmo style={fontStyles}/> </Card.Text> 
      </Card.Body> 
    </Card> 
    <Card style = {{width: '18rem'}} >
      <Card.Body >
        <Card.Title > <p> Become a Patreon</p> </Card.Title> 
        <Card.Text ><FaPatreon style={fontStyles}/> </Card.Text> 
      </Card.Body> 
    </Card> 
    <Card style = {{width: '18rem'}}>
      <Card.Body >
        <Card.Title > <p> Checkout Shop</p></Card.Title> 
        <Card.Text ><FaShoppingBag style={fontStyles}/></Card.Text> 
      </Card.Body>
    </Card>
  </CardGroup>
  )
}

export default CardMoney;
