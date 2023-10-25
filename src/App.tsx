import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
    </div>
  );
}

export default App;
