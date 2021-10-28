import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BodySection from '../BodySection';
function WaystoHelp(){
    return <div>
    <NavBar/>
    <img className="firstImage" alt="waystohelp" src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <BodySection
      header={'Ways to Help'}
      message={'Thanks to your generosity and amazing support, we are able to do more than we ever thought possible.'}
        para1={'Sarama Rescue Is A 100% Volunteer Based Rescue Organization.'}
para2={"We cannot do what we do without your amazing support and help. Through your generous donations, precious time and valuable skills, we are on the path to saving even more animals and providing them with much needed love and care they deserve."}
    />
<Footer/>
    </div> 
}

export default WaystoHelp
