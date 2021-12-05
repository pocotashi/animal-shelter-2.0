import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BodySection from '../BodySection';

function Donate(){
    return <div>
    <NavBar/>
    <img className="firstImage" alt="donate" src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

    <BodySection
        header={'Donate'}

        para={<h1>The donation form is under construction</h1>}
        
    />
    

    
    
<Footer/>
    </div> 
}

export default Donate


