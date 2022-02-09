import React from "react";

import { Header, Footer } from '../components/index';


function AboutUs() {
    return(
        <div className="aboutUsContent">
            <Header/>
            <div className="container">
                <div className="aboutUsTitle">
                    <div className="titleLineTop"></div>
                    <h1>
                       О нас
                    </h1>
                    <div className="titleLinebottom"></div>
                </div>
                <div className="aboutUsContainer">
                    <h2 className="aboutUsContainerTitle">Хмельницкий, 11</h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;