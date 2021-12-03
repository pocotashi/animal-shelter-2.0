import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function RecentEvent(){
    return (
    <div className="rEvent">
        <Container>
            <Row className="events">
                <Col xs={12} md={6} >
                    <img className="rEvent-img"  alt="journals" src="https://sarama.org/wp-content/uploads/2018/11/petco1.jpg"/>
                </Col>
        
                <Col xs={12} md={6} className="events1">
                    <h1>Recent Journal Entry</h1>
                    <h6>Our First Petco Adoption Event</h6>
                    <p className="rEvent-text">What a success our first Petco event was! We met so many wonderful people and Kohl had and amazing time playing with everyone who stopped by💜 Thank you to all for being our first</p>
                </Col>
            
            </Row>

            <Row className="events">

                <Col xs={12} md={6} className="events1" >
                    <h1>Recent Success Story</h1>
                    <h6>Our First Petco Adoption Event</h6>
                    <p className="rEvent-text">Rocky, the adorable senior Havanese pup, came to us when his owners couldn’t care for any longer. They were struggling to find a place to live themselves and couldn’t manage Rocky’s medical care. We promised he would get the care he needed and find him a loving permanent home.</p>
                </Col>

                <Col xs={12} md={6} >
                    <img className="rEvent-img" alt="successStories" src="https://sarama.org/wp-content/uploads/2019/03/rocky_success1.jpg"/>
                </Col>

                
            </Row>
        </Container>
    </div>

    )
}

export default RecentEvent;

