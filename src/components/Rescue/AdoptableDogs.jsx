import React, {useState} from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap';
import BodySection from '../BodySection';
import Dogs from '../Dogs';
import Popup from '../PopUp.js';
import Carousel from 'react-bootstrap/Carousel'
import CakeIcon from '@mui/icons-material/Cake';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TransgenderIcon from '@mui/icons-material/Transgender';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PetsIcon from '@mui/icons-material/Pets';

function AdoptableDog(){

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }
    
    return (
    <div>
        <NavBar/>
        <div>
            <img className="firstImage" alt="dogs" src="https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <BodySection
            header={'Adoptable Dogs'}
            message={'Meet our adoptable dogs! All these dogs have been rescued and are ready to join your family.'}
            para={'All of these dogs are individuals and have their own stories, interests, and personalities. Please read their bios and browse their photos and let us know if we can help you find the one that’s right for you. All of our dogs have been given a comprehensive exam by a veterinarian. They have been vaccinated, neutered or spayed, FIV/Felv, and microchipped. Any additional medical info is listed in their bios.'}
        />
       <div className="profileCards">
        <Row  xs={1} md={3} className="g-4">
        {Dogs.map((dog) => (
        <Col>
        
            <Card 
            // type="button"
            onClick={togglePopup}>

            <Card.Img variant="top" src={dog.image} />
                    <Card.Body>
                        <Card.Title>{dog.name}</Card.Title>
                        <Card.Text>Breed: {dog.breed}</Card.Text>
                        <Card.Text>Age: {dog.age}</Card.Text>
                        <Card.Text>Sex: {dog.sex}</Card.Text>

                    </Card.Body>
                </Card>
                {isOpen && <Popup
      content={
      <div className="modal-content">
      <div className="modal-header pet-header">
      
      <div className="modal-title pull-left"><h1>{dog.name}</h1>
            </div>
            </div>
        <div className="modal-body">
        <div className="banner">
        <pet-slider>
        <Carousel>
            <Carousel.Item>
             <img
                className="d-block w-100"
                src={dog.image}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
             <img
                className="d-block w-100"
                src="https://www.shelterluv.com/sites/default/files/animal_pics/1235/2021/10/01/09/20211001095020.png"
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
             <img
                className="d-block w-100"
                src="https://www.shelterluv.com/sites/default/files/animal_pics/1235/2021/09/19/12/20210919123258.png"
                alt="First slide"
            />
            </Carousel.Item>  
        </Carousel>
        </pet-slider>
        </div>
        <div className="pet-body">
            <div className="info-grid">
                <div className="info-item">
                    <FitnessCenterIcon fontSize="large"/>
                    {/* <div className="icon-AH-icon-size-purple"></div> */}
                        <div>Small (1-19)</div>
                </div>
                <div className="info-item">
                <PetsIcon fontSize="large"/>
                {/* <div className="icon-AH-icon-breed-purple"> */}
                {/* <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
                <span className="path6"></span>
                <span className="path7"></span>
                <span className="path8"></span>
                <span className="path9"></span>
                <span className="path10"></span>
                <span className="path11"></span>
                <span className="path12"></span>
                <span className="path13"></span>
                <span className="path14"></span>
                <span className="path15"></span>
                <span className="path16"></span>
                <span className="path17"></span>
                <span className="path18"></span>
                <span className="path19"></span>
                <span className="path20"></span> */}
                {/* </div> */}
                <div>Chihuahua/Terrier</div>
                </div>
        <div className="info-item">
            {/* <div className="icon-AH-icon-age-purple"></div> */}
            <CakeIcon fontSize="large"/>
            <div>2 Years</div>
        </div>
        <div className="info-item">
                <TransgenderIcon fontSize="large"/>
            {/* <div className="icon-AH-icon-sex-purple"></div> */}
            <div>Female</div>
        </div>
        <div className="info-item">
        <LocationOnIcon fontSize="large"/>
            {/* <div className="icon-AH-icon-location-purple"></div> */}
            <div>Foster Care</div></div>
        </div>
        <div className="description"> 
        Jory was surrendered to the city shelter with parvovirus. She arrived at the emergency vet hospital so lethargic that she was falling asleep standing up. Doctors treated her for several days before her condition began improving and she regained an appetite. 
        <br/>
        Day-by-day, Jory began to perk up and she was finally stable enough for us to transfer her into foster care just recently. Jory's foster reports that she's an extremely sweet dog who bonds with her human(s) very quickly. She's a total lap dog who wants to be with you at all times! 
        <br/>
        Jory is ready for a new home! She may still be shedding parvovirus, which is not contagious to humans or cats. If her new adopter has other dogs, our animal care staff should talk to you about how best to keep your pets safe. Please contact Animal Haven for more information on Jory! </div><div class="adopt"><a class="btn btn-primary" href="/#supportme" target="_blank">Donate to my Care</a><a class="btn btn-primary" href="/adoptionsurvey" target="_blank">General Questions?</a>
        </div>
        </div>
        </div>
      </div>}
      handleClose={togglePopup}
    />}
        </Col>))}
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
export default AdoptableDog;
