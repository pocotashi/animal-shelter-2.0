import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BodySection from '../BodySection';

function Rescue(){
    return <div>
    <NavBar/>
    <img className="firstImage" alt="rescue" src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
<BodySection
    header={'Rescue'}
    message={'We believe in a community based rescue approach. Working together we can make the world a better place for animals.'}
    para={'At Kipu\'s Rescue, we firmly believe a holistic approach to rescue is the most effective way even though rescuing at risk animals still remains our primary focus.'}
    para1={'We take in all breeds, ages and personalities. We believe all beings have a right to live and thrive. All of our rescues are fully vetted including spay/neuter, vaccine, heartworm test for dogs, fiv/felv test for cats, microchipped and treated with flea preventative. Any other health issues or injuries are also taken care of by our caring vets. We work with other rescues and people in the community towards a common goal of making the world a better place for animals.'}
/>
<div className="page-long-des-inner">
    
<a href="/adoptabledogs" ><h6 style={{color:"black"}}>Check out our adorable adoptable dogs!</h6></a>
<a href="/adoptablecats" ><h6 style={{color:"black"}}>Check out our adorable adoptable cats!</h6></a>
        
    
</div>
<Footer/>
    </div> 
}

export default Rescue

{/* <li><a href="#" ><h6>Check out our adorable animals still in need of foster!</h6></a></li>
        <li><a href="#" ><h6>Permanent residents - Sarama Santuary Animals</h6></a></li>
        <li><a href="#" ><h6>Success Stories</h6></a></li>
        <li><a href="#" ><h6>Check out our rescue and outreach programs</h6></a></li> */}