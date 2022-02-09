import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, AboutUs, ConstructionProgress, Apartments, Penthouses } from './pages/index';

function App() {
  const [itemsCardPethouses, setItemsCardPenthouses] = React.useState([]);
  const [itemsCardApartments, setItemsCardApartments] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://62013ecefdf509001724992c.mockapi.io/cardApartments').then(res => {
      setItemsCardApartments(res.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get('https://62013ecefdf509001724992c.mockapi.io/cardPenthouses').then(res => {
      setItemsCardPenthouses(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/apartments" element={<Apartments itemsCardApartments={itemsCardApartments}/>} exact/>
        <Route path="/penthouses" element={<Penthouses itemsCardPethouses={itemsCardPethouses} />} exact/>
        <Route path="/aboutUs" element={<AboutUs />} exact/>
        <Route path="/constructionProgress" element={<ConstructionProgress/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
