import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Myth(){
    return (
        <div className="myth-section">
        
            <Container fluid>
            
                <Col>
                    <h1>Naming of Kipu's Rescue</h1> 
                </Col>
                <Col md={{ span: 6, offset: 3 }}>
                <p>The name of our rescue is dedicated to my late dog Kipu. In tibetan language, 
                Kipu means Happy. Therefore, we would like to spread joy by rescuing animals, 
                and helping them find foverever homes.</p>
                </Col>
            
            </Container>
        


            
            <Container>
            <Row >
                <Col xs={12} md={8} ><p >
            Our rescue believes, and vows to protect and nurture any animal who needs our care. 
            Animals need kindness, love, and respect as much as we do. Through rescue, education, 
            and advocacy we hope to not only save animals but inspire the community to help us create
             a more compassionate world for the animals.
            </p></Col>
                <Col xs={12} md={4}><img class="myth-image"
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="23"/></Col>
            </Row>
            </Container>
            
        </div>

    )
}

export default Myth;
