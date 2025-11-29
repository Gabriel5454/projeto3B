import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import FormasApp from "./pages/FormasApp";
import CombateApp from "./pages/CombateApp";
import RecursosApp from "./pages/RecursosApp";
import Lista from "./pages/Lista";

import Futebol from "./pages/Futebol";
import Tennis from "./pages/Tennis";
import Ginastica from "./pages/Ginastica";
import Lutas from "./pages/lutas";
import Basquete from "./pages/Basquete";
import Atletismo from "./pages/Atletismo";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formas" element={<FormasApp />} />
          <Route path="/combate" element={<CombateApp />} />
          <Route path="/recursos" element={<RecursosApp />} />
          <Route path="/aprender_mais" element={<Lista />} />

          {/* Esportes */}
          <Route path="/futebol" element={<Futebol />} />
          <Route path="/tenis" element={<Tennis />} />
          <Route path="/ginastica" element={<Ginastica />} />
          <Route path="/lutas" element={<Lutas />} />
          <Route path="/basquete" element={<Basquete />} />
          <Route path="/atletismo" element={<Atletismo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
