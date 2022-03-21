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
                    <div className="aboutUsContainerText">
                        <h2 className="aboutUsContainerTextTitle">Хмельницкий, 11</h2>
                        <p className="aboutUsContainerTextSubtext">
                            Это комплекс элитных жилых домов. Мы на рынке уже 10 лет и было выполнено 50 успешных проектов.
                            Покупая у нас недвижимость, вы можете не бояться о потери денег. Как показывает практика - с каждым годом
                            наши апартаменты стабильно растут в цене.
                        </p>
                    </div>
                    <div className="aboutUsContainerImg">
                        <img src="img/about-us-img.jpg" alt="" width="800" height="500"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;