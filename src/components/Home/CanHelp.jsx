import React from 'react';
import CardMoney from './Cards';

function CanHelp() {
  return (
    <div className = 'torn-paper' >
    <div >
    <img src = "https://image.freepik.com/free-vector/browen-torn-paper-transparent-background_1017-23481.jpg"
    width = "100%"
    height = "200px"
    alt="image1"/> <
    /div>
    <div >
    <h2 > How You Can Help < /h2>
    <CardMoney/>
    </div>
    <div >
    < img className = "bottom-torn-paper"
    src = "https://image.freepik.com/free-vector/browen-torn-paper-transparent-background_1017-23481.jpg"
    width = "100%"
    height = "200px"
    alt="image2"/> <
    /div>


    <
    /div>
  )
}

export default CanHelp;
