import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Action from './ProfileComps/Action';
import Story from './ProfileComps/Story';
import Profile from './ProfileComps/Profile';


export default function Molly(){
    return (
        <div>
            <NavBar/>
           <div>
           <Profile/>
           <Action/>
                <Story/>
               
           </div>
            <Footer/>
            
        </div>
    )
}