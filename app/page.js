'use client'
import Nav from "./components/Nav";
import Services from "./components/Services";
import Skill from "./components/Skill";
import About from "./components/About";
import Recent from "./components/recent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  return (
    <>
          <Nav />
          <Services />
          <Skill />
          <About />
          <Recent />
          <Contact />
          <Footer />
    </>
  );
}
