import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Carasol from "./Carasol";
import Deals from "./Deals";
import Contact from "./Contact";
import About from "./About";
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div>
      <h1>Food Landing Page</h1>
      <Routes>
        <Route path="/" element={<Carasol />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
