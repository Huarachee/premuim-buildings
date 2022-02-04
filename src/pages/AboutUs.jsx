import React from "react";

import { Header, Footer } from '../components/index';


function AboutUs() {
    return(
        <div className="aboutUsContent">
            <Header/>
            <div className="container">
                <h1>Здесь будет инфа "о нас"</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;