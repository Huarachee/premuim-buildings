import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from '../components/index';

function PagePenthousesTwo() {
    return (
        <div className="pagePenthousesContent">
            <Header/>
            <div className="pagePenthousesContentContainer">
                <div className="container">
                    <Link className='linkPagePenthouses' to="/penthouses">
                        <div className="backContainer">
                            <img src="img/arrow-left.svg" alt="arrow-left-svg" width="50" height="50"/>
                            <b className="backContainerText">Назад</b>
                        </div>
                    </Link>
                    
                    
                    <h1 className='pagePenthousesTitle'>Пентхаус в 2 корпусе ЖК</h1>
                    <div className="pagePenthousesLine"></div>
                    <img className='pagePenthousesImg' src="img/penthouses2.jpg" alt="" width="800" height="500"/>
                    <div className="pagePenthousesLine"></div>
                    <div className="pagePenthousesInfo">
                        <div className="penthousesSquareContainer">
                            <b className="penthousesSquareTitle">
                                Площадь:
                            </b>
                            <p className="penthousesInfoSquareText">
                                317,5 кв.м
                            </p>
                        </div>

                        <div className="penthousesFloorContainer">
                            <b className="penthousesFloorTitle">
                                Этаж:
                            </b>
                            <p className="penthousesFloorText">
                                25/25 этаж
                            </p>
                        </div>
                
                        <div className="penthousesPriceContainer penthousesPriceContainerPrice">
                            <b className="penthousesPriceTitle">
                                Цена:
                            </b>
                            <p className="penthousesPriceText">
                                109 млн. руб.
                            </p>
                        </div>

                    </div>
                    <div className="pagePenthousesLine"></div>
                    <div className="pagePenthousesDescrContainer">
                        <b className="pagePenthousesDescrTitle">
                            Описание:
                        </b>
                        <p className='pagePenthousesDescrText'>
                            Этот пентхаус предназначенный для своей планировки и дизайна. 
                            Вы можете по настоящему раскрыть творческий потенциал. С подземной парковкой.
                        </p>
                        <div className="penthousesPlanContainer">
                            <img src="img/penthouse_plan2.png" alt="penthouse plan"  width="600" height="500"/>

                            <div className="penthousesDot penthousesDot--1">
                                <p className="penthousesDotText">
                                    Гостинная и кухня с современной и дорогой отделкой.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--2">
                                <p className="penthousesDotText">
                                    Просторная и основная спальня из немецкой небели.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--3">
                                <p className="penthousesDotText">
                                    Гардеробная основной спальни.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--4">
                                <p className="penthousesDotText">
                                    Ванная комната при основной спальни.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--5">
                                <p className="penthousesDotText">
                                    Спальня со встроенным гардеробом.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--6">
                                <p className="penthousesDotText">
                                    Спальня со встроенным гардеробом.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--7">
                                <p className="penthousesDotText">
                                    Ванная комната со светлой отделкой.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--8">
                                <p className="penthousesDotText">
                                    Ванная комната выполнена с более тёмной отделкой.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--9">
                                <p className="penthousesDotText">
                                    Туалет предназначенный для гостей.
                                </p>
                            </div>

                            <div className="penthousesDot penthousesDot--10">
                                <p className="penthousesDotText">
                                    Нижняя терраса для вечерних посиделок.
                                </p>
                            </div>

                        </div>
                    </div>
                    <form className='pagePenthousesForm' action="">
                        <b className='penthousesFormTitle'>Понравилась квартира?</b>
                        <p>
                            Напишите свой номер телефона, чтобы мы смогли с вами связаться в рабочее время.
                        </p>
                        <input className='penthousesFormInput' type="text" placeholder='Введите номер телефона...'/>
                        <Link className='certificateFormLink' to="/certificatePage">
                            <div className="certificateFormBtn">Оставить заявку</div>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PagePenthousesTwo;