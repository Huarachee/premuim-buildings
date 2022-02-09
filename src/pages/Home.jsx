import React from "react";
import { Link } from "react-router-dom";

import { Header, Footer } from '../components/index';

function Home() {
    return (
        <div className="homeContent">
            <header className="headerContent">
                <Header/>
                <div className="videoHeader">
                    <div className="videoContainer">
                        <video className="videoMedia" src="video/video__bg.mp4" autoPlay muted loop></video>
                    </div>
                </div>
                <div className="headerTitleContainer">
                    <div className="headerLineTop"></div>
                    <h1 className="headerTitle">
                        Премиальные ЖК в сердце города
                    </h1>
                    <div className="headerLogoBottomContainer">
                        <div className="headerLineBottomLeft"></div>
                        <div className="headerLineLogo">
                            <img src="img/logo.svg" alt="" width={50} height={50}/>
                        </div>
                        <div className="headerLineBottomRight"></div>
                    </div>
                </div>
            </header>
            
            <div className="container">
                <div className="apartmentsContainer">
                    <Link className="link" to="/apartments" exact>
                        <div className="apartmentsBox">
                            <div className="apartmentsInfo">
                                <p className="apartmentsTitle">
                                    <span className="apartmentsTitleSpan">78 </span><br/>квартир
                                </p>
                                <div className="apartmentAreaContainer">
                                    <div className="apartmentAreaInfo">
                                        <span>50-161 кв.м</span>
                                        <p>
                                            Площадь квартиры
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className="link" to="/penthouses" exact>
                        <div className="penthousesBox">
                            <div className="penthousesInfo">
                                <p className="penthousesTitle">
                                    <span className="penthousesTitleSpan">6 </span><br/>пентхаусов
                                </p>
                                <div className="penthousesAreaContainer">
                                    <div className="penthousesAreaInfo">
                                        <span>210-442 кв.м</span>
                                        <p>
                                            Площадь пентхаусов
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <section className="benefitsBuildingsContent">
                    <div className="benefitsBuildingsTitle">
                        <div className="titleLineTop"></div>
                        <h1>
                           Преимущества нашего ЖК
                        </h1>
                        <div className="titleLinebottom"></div>
                    </div>

                    <div className="benefitsBuildingsItems">
                        <div className="benefitsBuildingsItem">
                            <div className="benefitsWrapper benefitsWrapper1">
                                <h4 className="benefitsTitle benefitsTitle1">
                                    Безопасность по всей территории зданий.
                                </h4>
                                <p className="benefitsText benefitsText1">
                                    По всему периметру раставлены камеры.
                                    Также работают охраники “Собр”.
                                </p>
                                <div className="benefitsImgContainer1">
                                    <div className="benefitsImgItem1">
                                        <img src="img/benefitsImg1.1.png" alt="sobr" className="benefitsImg1" />
                                    </div>
                                    <div className="benefitsImgItem2">
                                        <img src="img/benefitsImg1.2.png" alt="building" className="benefitsImg2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefitsBuildingsItem">
                            <div className="benefitsWrapper benefitsWrapper2">
                                <h4 className="benefitsTitle benefitsTitle2">
                                    Свой спортзал с бассейном.
                                </h4>
                                <p className="benefitsText benefitsText2">
                                    А также СПА и Коворкинг для работы с ноутбуком.
                                </p>
                                <div className="benefitsImgContainer2">
                                    <div className="benefitsImgItem3">
                                        <img src="img/benefitsImg2.jpg" alt="gym" className="benefitsImg3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefitsBuildingsItem">
                            <div className="benefitsWrapper benefitsWrapper3">
                                <h4 className="benefitsTitle benefitsTitle3">
                                    Бутики премиум одежды.
                                </h4>
                                <p className="benefitsText benefitsText3">
                                    А также сервис прачечной и химчистки.
                                </p>
                                <div className="benefitsImgContainer3">
                                    <div className="benefitsImgItem4">
                                        <img src="img/benefitsImg3.jpg" alt="boutique" className="benefitsImg4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefitsBuildingsItem">
                            <div className="benefitsWrapper benefitsWrapper4">
                                <h4 className="benefitsTitle benefitsTitle4">
                                    Отапливаемый подземный паркинг.
                                </h4>
                                <p className="benefitsText benefitsText4">
                                    А также имеется автомойка и детейлинг автомобиля.
                                </p>
                                <div className="benefitsImgContainer4">
                                    <div className="benefitsImgItem5">
                                        <img src="img/benefitsImg4.png" alt="automobile" className="benefitsImg5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
            <Footer/>
        </div>
   );
}

export default Home;