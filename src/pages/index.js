import React, {useState} from 'react';
import BioSection from '../components/BioSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {
  homeObjOne
} from '../components/BioSection/Data';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <BioSection {...homeObjOne} />
    
     </>
  );
};

export default Home;