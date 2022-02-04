import React from "react";

import { Header, Footer } from '../components/index';

function Apartments() {
    return(
        <div className="apartmentsContent">
            <Header/>
            <div className="container">
                <h1>Тут будут квартиры</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default Apartments;