import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './hooks/ThemeContext';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <ThemeProvider>
        <NavBar/>
        <HeroSection/>
        <Skills/>
        <Experience/>
    </ThemeProvider>
  );
}

export default App;
