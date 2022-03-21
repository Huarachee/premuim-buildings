import React from "react";
import { Link } from "react-router-dom";

import { Header, Footer, Card } from '../components/index';

function Apartments({ itemsCardApartments }) {
    return(
        <div className="apartmentsContent">
            <Header/>
            <div className="container">
                <Link className='linkPagePenthouses' to="/">
                    <div className="backContainer backContainerApartments">
                        <img src="img/arrow-left.svg" alt="arrow-left-svg" width="50" height="50"/>
                        <b className="backContainerText">Назад</b>
                    </div>
                </Link>
                <div className="apartmentsContentTitle">
                    <div className="titleLineTop"></div>
                    <h1>
                       Квартиры
                    </h1>
                    <div className="titleLinebottom"></div>
                </div>
                <div className="cardApartmentsContainer">
                    {itemsCardApartments.map((item, index) => (
                        <Card
                            key={`${index}_${item}`}
                            apartmentsUrlImg={item.apartmentsUrlImg}
                            apartmentsName={item.apartmentsName}
                            squareApartment={item.squareApartment}
                            priceApartment={item.priceApartment}
                            apartmentDescription={item.apartmentDescription}
                            watchApartmentsLink={item.watchApartmentsLink}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Apartments;