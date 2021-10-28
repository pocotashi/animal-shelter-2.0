import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import FirstSection from './Home/FirstSection';
import Adoptables from './Home/Adoptables';
import Myth from './Home/Myth';
import CanHelp from './Home/CanHelp';
import RecentEvent from './Home/Journals';
import Quote from './Home/Quotes';
import './styles.css';

function Home(){
  return (
    <div>
    <NavBar/>
    <FirstSection/>
    <Adoptables/>
    <Myth/>
    <CanHelp/>
    <RecentEvent/>
    <Quote/>
    <Footer/>
    </div>
  )
}

export default Home;
