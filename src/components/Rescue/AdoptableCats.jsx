import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap';
import BodySection from '../BodySection';





function AdoptableCat(){
    let cats = [
        {
            "name": "Shuri",
            "breed": "Domestic Shorthair",
            "age": "5 months",
            "sex": "Female",
            "image": "https://www.shelterluv.com/sites/default/files/animal_pics/1235/2021/08/30/14/20210830144156.png"
        },
        {
            "name":"Caraway",
            "breed": "Domestic Shorthair",
            "age": "1 year",
            "sex": "Male",
            "image": "https://www.shelterluv.com/sites/default/files/animal_pics/1235/2021/10/22/12/20211022121932.png"
          },
          {
            "name":"Esme",
            "breed": "Bombay",
            "age": "9 years",
            "sex": "Female",
            "image": "https://www.shelterluv.com/sites/default/files/animal_pics/1235/2021/10/17/11/20211017115726.png"
          },
          {
            "name":"Tony T",
            "breed": "Domestic Shorthair",
            "age": "2 months",
            "sex": "Male",
            "image": "https://www.shelterluv.com/sites/default/files/animal_pics/1235/2021/10/25/12/20211025120326.png"
          },
          {
            "name":"Vanna",
            "breed": "Cornish Rex",
            "age": "12 years",
            "sex": "Female",
            "image": "https://www.shelterluv.com/sites/default/files/animal_pics/1235/2021/10/06/16/20211006164621.png"
          },
          {
            "name":"Carob",
            "breed": "Domestic Shorthair",
            "age": "4 years",
            "sex": "Female",
            "image": "https://www.shelterluv.com/sites/default/files/animal_pics/1235/2018/10/24/11/20181024112039.png"
          },

    ]

    
    return (
    <div>
    <NavBar/>
    <div>
    <img className="firstImage" alt="cats" src="https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
    <BodySection
            header={'Adoptable Cats'}
            message={'Meet our adoptable cats! All these cats have been rescued and are ready to join your family.'}
            para={'All of these cats are individuals and have their own stories, interests, and personalities. Please read their bios and browse their photos and let us know if we can help you find the one that’s right for you. All of our cats have been given a comprehensive exam by a veterinarian. They have been vaccinated, neutered or spayed, FIV/Felv, and microchipped. Any additional medical info is listed in their bios.'}
        />
        <div className="profileCards">
<Row xs={1} md={3} className="g-4">
  {cats.map((cat, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={cat.image} />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Text>Breed: {cat.breed}</Card.Text>
          <Card.Text>Age: {cat.age}</Card.Text>
          <Card.Text>Sex: {cat.sex}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</div>
  
<div className="adoption-process"><h1>
    Adoption Process
</h1>
<p>Our adoption process is people friendly and we welcome the opportunity to work with people looking to adopt. Our adoption process consists of a short application and a meet where you can get to know the animal you are interested in. Once you find the perfect match, we ask adopters to sign an adoption contract and give a donation to help us rescue the next animal in need. We process applications in the order in which they were received. By providing comprehensive behavioral information about the animal and gathering relevant information about the prospective home environment, we work with each applicant to match them with a compatible animal.</p></div>
        
        <Footer/>

    </div>
    )
}
export default AdoptableCat;
