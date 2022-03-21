import React from "react";
import { Link } from 'react-router-dom';

import { Header, Footer } from '../components/index';

function pageApartmentsNineteen() {
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
                    
                    <h1 className='pageApartmentsTitle'>3 комн. кв., 18/25 этаж</h1>
                    <div className="pageApartmentsLine"></div>
                    <img className='pageApartmentsImg' src="img/apartments19.jpg" alt="apartments img" width="800" height="500"/>
                    <div className="pageApartmentsLine"></div>
                    <div className="pageApartmentsInfo">
                        <div className="apartmentsSquareContainer">
                            <b className="apartmentsSquareTitle">
                                Площадь:
                            </b>
                            <p className="apartmentsInfoSquareText">
                                100 кв.м
                            </p>
                        </div>

                        <div className="apartmentsFloorContainer">
                            <b className="apartmentsFloorTitle">
                                Этаж:
                            </b>
                            <p className="apartmentsFloorText">
                                18/25 этаж
                            </p>
                        </div>
                
                        <div className="apartmentsPriceContainer apartmentsPriceContainerPrice">
                            <b className="apartmentsPriceTitle">
                                Цена:
                            </b>
                            <p className="apartmentsPriceText">
                                18 млн. руб.
                            </p>
                        </div>

                    </div>
                    <div className="pageApartmentsLine"></div>
                    <div className="pageApartmentsDescrContainer">
                        <b className="pageApartmentsDescrTitle">
                            Описание:
                        </b>
                        <p className='pageApartmentsDescrText'>
                            Большая квартира в стиле Модерн. Балкон с панорамным видом. 
                            Можно взять в ипотеку или на материнский капитал.
                            Что входит в эти апартаменты:<br/>
                            - Подземная парковка;<br/>
                            - Гостинная;<br/>
                            - Кухня;<br/>
                            - Основная спальня;<br/>
                            - Гардеробная при основной спальне;<br/>
                            - Ванная комната при основной спальни;<br/>
                            - Спальня со встроенным гардеробом;<br/>
                            - Вторая ванная комната;<br/>
                        </p>
                        <div className="apartmentsPlanContainerNinePage">
                            <img src="img/apartments_two_bedroom_plan3.png" alt="penthouse plan"  width="600" height="500"/>

                            <div className="apartmentsDot apartmentsDot--1">
                                <p className="apartmentsDotText">
                                    Гостинная и кухня с современной и дорогой отделкой.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--2">
                                <p className="apartmentsDotText">
                                    Просторная и основная спальня из немецкой мебели.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--3">
                                <p className="apartmentsDotText">
                                    Гардеробная при основной спальне.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--4">
                                <p className="apartmentsDotText">
                                    Ванная комната при основной спальни.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--5">
                                <p className="apartmentsDotText">
                                    Спальня со встроенным гардеробом.
                                </p>
                            </div>

                            <div className="apartmentsDot apartmentsDot--6">
                                <p className="apartmentsDotText">
                                    Вторая ванная комната.
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

export default pageApartmentsNineteen;