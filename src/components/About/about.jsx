import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BodySection from '../BodySection';


function About(){
    return (
    <div>
    <NavBar/>
    
    <img className="firstImage" alt="about " src="https://images.pexels.com/photos/1790085/pexels-photo-1790085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <BodySection
      header={'About US'}
      message={'The mutual love for animals brought us together. The will to help the voiceless propels us forward.'}
      para={'Sarama Animal Rescue was inspired by the animals that need us most. They have taught us about unconditional love, about trusting even when you’re vulnerable and about resilience and hope even after trauma. This rescue is our way to honor them and to give back to them.'}
      para1={'Before creating Sarama Animal Rescue, we worked in the animal rescue world for many years. We wanted to do more for all of the animals we came across that were the most often overlooked for adoption, whether because of behavioral issues, struggling in the stressful environment of a kennel, or even just their physical appearance. We couldn’t help but put ourselves in the animals’ shoes and think how we would feel to be abandoned by ones we loved, end up in a stressful shelter and get overlooked time and time again.'}
      para2={'Once taken out of the shelter environment and placed in a foster home, many of these animals thrived and became well-adjusted members of the family. While there are some that do need extra TLC, we have never regretted giving an animal a chance.'}

    />
        
        <Footer/>

    </div>
    )
}
export default About;
