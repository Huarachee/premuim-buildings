import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, AboutUs, ConstructionProgress, Apartments, Penthouses,
        PagePenthousesOne, PagePenthousesTwo, PagePenthousesThree, PagePenthousesFour,
        PagePenthousesFive, PagePenthousesSix, CertificatePage, PageApartmentsOne, 
        PageApartmentsTwo, PageApartmentsThree, PageApartmentsFour, PageApartmentsFive, 
        PageApartmentsSix, PageApartmentsSeven, PageApartmentsEight, PageApartmentsNine,
        PageApartmentsTen, PageApartmentsEleven, PageApartmentsTwelve, PageApartmentsThirteen,
        PageApartmentsFourteen, PageApartmentsFifteen, PageApartmentsSixteen, PageApartmentsSeventeen,
        PageApartmentsEighteen, PageApartmentsNineteen, PageApartmentsTwenty } from './pages/index';

function App() {
  const [itemsCardPethouses, setItemsCardPenthouses] = React.useState([]);
  const [itemsCardApartments, setItemsCardApartments] = React.useState([]);
  const [itemsPenthousesPage, setItemsPenthousesPage] = React.useState([]);

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

  React.useEffect(() => {
    axios.get('https://62013ecefdf509001724992c.mockapi.io/penthousesPage').then(res => {
      setItemsPenthousesPage(res.data);
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
        <Route path="/pagePenthousesOne" element={<PagePenthousesOne/>} exact/>
        <Route path="/pagePenthousesTwo" element={<PagePenthousesTwo/>} exact/>
        <Route path="/pagePenthousesThree" element={<PagePenthousesThree/>} exact/>
        <Route path="/pagePenthousesFour" element={<PagePenthousesFour/>} exact/>
        <Route path="/pagePenthousesFive" element={<PagePenthousesFive/>} exact/>
        <Route path="/pagePenthousesSix" element={<PagePenthousesSix/>} exact/>
        <Route path="/certificatePage" element={<CertificatePage/>} exact/>
        <Route path="/pageApartmentsOne" element={<PageApartmentsOne/>} exact/>
        <Route path="/pageApartmentsTwo" element={<PageApartmentsTwo/>} exact/>
        <Route path="/pageApartmentsThree" element={<PageApartmentsThree/>} exact/>
        <Route path="/pageApartmentsFour" element={<PageApartmentsFour/>} exact/>
        <Route path="/pageApartmentsFive" element={<PageApartmentsFive/>} exact/>
        <Route path="/pageApartmentsSix" element={<PageApartmentsSix/>} exact/>
        <Route path="/pageApartmentsSeven" element={<PageApartmentsSeven/>} exact/>
        <Route path="/pageApartmentsEight" element={<PageApartmentsEight/>} exact/>
        <Route path="/pageApartmentsNine" element={<PageApartmentsNine/>} exact/>
        <Route path="/pageApartmentsTen" element={<PageApartmentsTen/>} exact/>
        <Route path="/PageApartmentsEleven" element={<PageApartmentsEleven/>} exact/>
        <Route path="/PageApartmentsTwelve" element={<PageApartmentsTwelve/>} exact/>
        <Route path="/PageApartmentsThirteen" element={<PageApartmentsThirteen/>} exact/>
        <Route path="/PageApartmentsFourteen" element={<PageApartmentsFourteen/>} exact/>
        <Route path="/PageApartmentsFifteen" element={<PageApartmentsFifteen/>} exact/>
        <Route path="/PageApartmentsSixteen" element={<PageApartmentsSixteen/>} exact/>
        <Route path="/PageApartmentsSeventeen" element={<PageApartmentsSeventeen/>} exact/>
        <Route path="/PageApartmentsEighteen" element={<PageApartmentsEighteen/>} exact/>
        <Route path="/PageApartmentsNineteen" element={<PageApartmentsNineteen/>} exact/>
        <Route path="/PageApartmentsTwenty" element={<PageApartmentsTwenty/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
