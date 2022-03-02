import React, {useState} from 'react';
import BioSection from '../components/BioSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

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
    <Projects />
    <Footer />
     </>
  );
};

export default Home;