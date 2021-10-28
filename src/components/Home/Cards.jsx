import React from 'react';
import Card from 'react-bootstrap/Card'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faCoffee
} from '@fortawesome/free-solid-svg-icons'
import {
  CardGroup
} from 'react-bootstrap';



function CardMoney() {
  return ( 
  <CardGroup >
    <Card style = {
      {
        width: '18rem'
      }
    } >
    <Card.Body >
    <Card.Title > Paypal < /Card.Title> <
    Card.Text >
    <FontAwesomeIcon icon = {
      faCoffee
    }/> 
    </Card.Text> 
    </Card.Body> 
    </Card> 
    <Card style = {
      {
        width: '18rem'
      }
    } >
    <
    Card.Body >
    <
    Card.Title > Paypal < /Card.Title> <
    Card.Text >
    <
    FontAwesomeIcon icon = {
      faCoffee
    }
    /> <
    /Card.Text> <
    /Card.Body> <
    /Card> <
    Card style = {
      {
        width: '18rem'
      }
    } >
    <
    Card.Body >
    <
    Card.Title > Paypal < /Card.Title> <
    Card.Text >
    <
    FontAwesomeIcon icon = {
      faCoffee
    }
    /> <
    /Card.Text> <
    /Card.Body> <
    /Card> <
    Card style = {
      {
        width: '18rem',
        height: '18rem'
      }
    } >
    <
    Card.Body >
    <
    Card.Title > Paypal < /Card.Title> <
    Card.Text >
    <
    FontAwesomeIcon icon = {
      faCoffee
    }
    />) <
    /Card.Text> <
    /Card.Body> <
    /Card> <
    /CardGroup>
  )
}

export default CardMoney;
