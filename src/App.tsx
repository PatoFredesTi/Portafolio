import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';



function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Skills/>
    </div>
  );
}

export default App;
