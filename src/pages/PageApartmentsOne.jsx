import React from "react";
import { Link } from 'react-router-dom';

import { Header, Footer } from '../components/index';

function pageApartmentsOne() {
    return(
        <div className="pageApartmentsContent">
            <Header/>
            <div className="pageApartmentsContentContainer">
                <div className="container">
                    <Link className='linkPageApartments' to="/apartments">
                        <div className="backContainer">
                            <img src="img/arrow-left.svg" alt="arrow-left-svg" width="50" height="50"/>
                            <b className="backContainerText">Назад</b>
                        </div>
                    </Link>
                    
                    
                    <h1 className='pageApartmentsTitle'>1 комн. кв., 4/25 этаж</h1>
                    <div className="pageApartmentsLine"></div>
                    <img className='pageApartmentsImg' src="img/apartments1.jpg" alt="" width="800" height="500"/>
                    <div className="pageApartmentsLine"></div>
                    <div className="pageApartmentsInfo">
                        <div className="apartmentsSquareContainer">
                            <b className="apartmentsSquareTitle">
                                Площадь:
                            </b>
                            <p className="apartmentsInfoSquareText">
                                44,8 кв.м
                            </p>
                        </div>

                        <div className="apartmentsFloorContainer">
                            <b className="apartmentsFloorTitle">
                                Этаж:
                            </b>
                            <p className="apartmentsFloorText">
                                4/25 этаж
                            </p>
                        </div>
                
                        <div className="apartmentsPriceContainer apartmentsPriceContainerPrice">
                            <b className="apartmentsPriceTitle">
                                Цена:
                            </b>
                            <p className="apartmentsPriceText">  
                                5.200.000 руб.
                            </p>
                        </div>

                    </div>
                    <div className="pageApartmentsLine"></div>
                    <div className="pageApartmentsDescrContainer">
                        <b className="pageApartmentsDescrTitle">
                            Описание:
                        </b>
                        <p className='pageApartmentsDescrText'>
                            Этот пентхаус предназначенный для своей планировки и дизайна. 
                            Вы можете по настоящему раскрыть творческий потенциал. 
                            Что входит в этот пентхаус:<br/>
                            - Подземная парковка;<br/>
                            - Нижняя терраса;<br/>
                            - Гостинная;<br/>
                            - Кухня;<br/>
                            - Основная спальня;<br/>
                            - Ванная комната при основной спальни;<br/>
                            - Гардеробная при основной спальни;<br/>
                            - Вторая спальня со встроенным гардеробом;<br/>
                            - Ванная комната у второй спальни;<br/>
                            - Туалет, предназначенный для гостей;<br/>
                            - Третья спальня со встроенным гардеробом;<br/>
                        </p>
                        <div className="apartmentsPlanContainerOnePage">
                            <img src="img/apartments_plan1.png" alt="apartments plan"  width="600" height="500"/>

                            <div className="apartmentsDot apartmentsDot--1">
                                <p className="apartmentsDotText">
                                    Гостинная и кухня с современной и дорогой отделкой.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--2">
                                <p className="apartmentsDotText">
                                    Основная спальня из немецкой мебели.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--3">
                                <p className="apartmentsDotText">
                                    Гардеробная при основной спальне.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--4">
                                <p className="apartmentsDotText">
                                    Ванная комната выполнена в морских тонах.
                                </p>
                            </div>

                        </div>
                    </div>
                    <form className='pageApartmentsForm' action="">
                        <b className='apartmentsFormTitle'>Понравилась квартира?</b>
                        <p>
                            Напишите свой номер телефона, чтобы мы смогли с вами связаться в рабочее время.
                        </p>
                        <input className='apartmentsFormInput' type="text" placeholder='Введите номер телефона...'/>
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

export default pageApartmentsOne;