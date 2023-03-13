import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer.js';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import Galeria from './pages/Galeria';
import PlantasInterior from './pages/PlantasInterior';
import PlantasExterior from './pages/PlantasExterior';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Nosotros" element={<NosotrosPage />} />
          <Route path="Novedades" element={<NovedadesPage />}/>
          <Route path="Contacto" element={<ContactoPage />}/>
          <Route path="Galeria" element={<Galeria />}/>
          <Route path="PlantasInterior" element={<PlantasInterior />}/>
          <Route path="PlantasExterior" element={<PlantasExterior />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
