import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './components/styles.css';
import Home from './components/Home';
import AdoptableDog from './components/Rescue/AdoptableDogs';
import AdoptableCat from './components/Rescue/AdoptableCats';
import About from './components/About/about';
import Molly from './components/Rescue/Molly';
import Rescue from './components/Rescue/Rescue';
import Foster from './components/Foster/Foster';
import Shop from './components/Shop/Shop';
import Donate from './components/Donate/Donate';
import WaystoHelp from './components/WaystoHelp/WaystoHelp';

export default function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route path="/molly">
      <MollyPage/>
    </Route>
    <Route path="/donate">
      <DonatePage/>
    </Route>
    <Route path="/waystohelp">
      <HelpPage/>
    </Route>
    <Route path="/shop">
      <ShopPage/>
    </Route>
    <Route path="/foster">
      <FosterPage/>
    </Route>
    <Route path="/rescue">
      <RescuePage/>
    </Route>
    <Route path="/about">
      <AboutUsPage/>
</Route>
      <Route path="/adoptabledogs">
      <AdoptableDogPage/>

      </Route>
      <Route path="/adoptablecats">
      <AdoptableCatPage/>

      </Route>
      <Route path='/'>
        <Home/>

      </Route>
    </Switch>
    </div>
    </Router>
  );
}


function AdoptableDogPage() {
  return (
    <div>
    <AdoptableDog/>
    </div>
    )
}

function AdoptableCatPage(){
  return (
    <AdoptableCat/>
  )
}

function AboutUsPage(){
  return (
    <About/>
  )
}
function RescuePage(){
  return (
    <Rescue/>
  )
}

function FosterPage(){
  return (
    <Foster
    />
  )
}

function ShopPage(){
  return (
    <Shop
    />
  )
}

function HelpPage(){
  return (
    <WaystoHelp
    />
  )
}
function DonatePage(){
  return (
    <Donate
    />
  )
}


function MollyPage(){
  return <Molly/>
}


