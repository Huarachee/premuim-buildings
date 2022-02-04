import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, AboutUs, ConstructionProgress, Apartments, Penthouses } from './pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/apartments" element={<Apartments/>} exact/>
        <Route path="/penthouses" element={<Penthouses/>} exact/>
        <Route path="/aboutUs" element={<AboutUs/>} exact/>
        <Route path="/constructionProgress" element={<ConstructionProgress/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
