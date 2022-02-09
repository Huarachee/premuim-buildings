import React from "react";

import { Header, Footer } from '../components/index';

function ConstructionProgress() {
    return (
        <div className="constructionProgressContent">
            <Header/>
            <div className="container">
                <div className="constructionProgressTitle">
                    <div className="titleLineTop"></div>
                    <h1>
                       Ход строительства
                    </h1>
                    <div className="titleLinebottom"></div>
                </div>
                <div className="progressContainer">
                    <div className="progressBox">
                        <div className="circleYear">
                            <p>2021</p>
                        </div>
                        <div className="progressBoxText">
                            <h4 className="progressBoxTitle">
                                Декабрь
                            </h4>
                            <p>
                                Начало строительства ЖК по утверждённому плану.
                            </p>
                        </div>
                    </div>
                    
                    <div className="circleLine"></div>

                    <div className="progressBox">
                        <div className="circleYear">
                            <p>2022</p>
                        </div>
                        <div className="progressBoxText">
                            <h4 className="progressBoxTitle">
                                Январь
                            </h4>
                            <p>
                                Заложение фундамента. Начало строительства подземного паркинга.
                            </p>
                        </div>
                    </div>
                    
                    <div className="circleLine"></div>
                    <div className="progressBox">
                        <div className="circleYear">
                            <p>2022</p>
                        </div>
                        <div className="progressBoxText">
                            <h4 className="progressBoxTitle">
                                Май
                            </h4>
                            <p>
                                Возведение первых этажей, предназначенных для коммерческой деятельности. утепление пола.
                            </p>
                        </div>
                    </div>
                    
                    <div className="circleLine"></div>

                    <div className="progressBox">
                        <div className="circleYear">
                            <p>2022</p>
                        </div>
                        <div className="progressBoxText">
                            <h4 className="progressBoxTitle">
                                Август
                            </h4>
                            <p>
                                Возведение этажей, предназначенные для жилья.
                            </p>
                        </div>
                    </div>
                    
                    {/* <div className="circleLine"></div> */}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ConstructionProgress;