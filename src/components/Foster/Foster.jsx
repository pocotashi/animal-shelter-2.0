import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BodySection from '../BodySection';

function Foster(){
    return <div>
    <NavBar/>
    <img className="firstImage" alt="foster" src="https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <BodySection
      header={'Foster'}
      message={'Foster homes are the bridges between homelessness and forever homes.'}
      para={"Animals in shelters have already experienced some kind of trauma, even if it's just a separation from the people they know and love. The shelter stay itself is also usually stressful. The noise levels, the smells, the lack of individual attention, strangers peering into the animals’ kennels where they often feel cornered can all contribute to animals developing defensive behaviors that hurt their chances of adoption."}
      para1={'Foster homes provide these animals with a place to decompress and feel safe. Their true personalities start to emerge. Their stress levels go down and they can focus on training and bonding with their human caretakers. They get to show their best characteristics which increases their chances of adoption.'}
      para2={'Foster homes are the bridges between homelessness and forever homes. They make the transition smoother and increase the chances of a successful adoption by providing the animal the care and support they need and providing the adopter with detailed information about their personalities. But for some animals it’s more than that. For some animals, the chance to go to a foster home is the difference between life and death. Foster parents are the true heroes who save lives.'}

    />
<Footer/>
    </div> 
}

export default Foster