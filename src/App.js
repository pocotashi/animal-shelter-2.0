import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import './components/styles.css';
import Home from './components/Home';
import AdoptableDog from './components/Rescue/AdoptableDogs';
import AdoptableCat from './components/Rescue/AdoptableCats';
import About from './components/About/about';
import Rescue from './components/Rescue/Rescue';
import Foster from './components/Foster/Foster';
import Shop from './components/Shop/Shop';
import Donate from './components/Donate/Donate';
import WaystoHelp from './components/WaystoHelp/WaystoHelp';

export default function App() {
  return (
    
    <div>
    
    
    
    <Route path="/donate"> <Donate/> </Route>
    <Route path="/waystohelp">
      <WaystoHelp/>
    </Route>
    <Route path="/shop">
      <Shop/>
    </Route>
    <Route path="/foster">
      <Foster/>
    </Route>
    <Route path="/rescue">
      <Rescue/>
    </Route>
    <Route path="/about">
      <About/>
</Route>
      <Route path="/adoptabledogs">
      <AdoptableDog/>

      </Route>
      <Route path="/adoptablecats">
      <AdoptableCat/>

      </Route>
      <Route exact path='/'>
        <Home/>

      </Route>
    
    </div>
    
  );
}


// function AdoptableDogPage() {
//   return (
//     <div>
//     <AdoptableDog/>
//     </div>
//     )
// }

// function AdoptableCatPage(){
//   return (
//     <AdoptableCat/>
//   )
// }

// function AboutUsPage(){
//   return (
//     <About/>
//   )
// }
// function RescuePage(){
//   return (
//     <Rescue/>
//   )
// }

// function FosterPage(){
//   return (
//     <Foster
//     />
//   )
// }

// function ShopPage(){
//   return (
//     <Shop
//     />
//   )
// }

// function HelpPage(){
//   return (
//     <WaystoHelp
//     />
//   )
// }
// function DonatePage(){
//   return (
//     <Donate
//     />
//   )
// }





