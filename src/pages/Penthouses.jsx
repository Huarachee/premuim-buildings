import React from "react";
import { Link } from "react-router-dom";

import { Header, Footer, Card } from '../components/index';

function Penthouses({ itemsCardPethouses }) {
    return(
        <div className="penthousesContent">
            <Header/>
            <div className="container">
                <div className="penthousesContentWrapper">
                    <Link className='linkPagePenthouses' to="/">
                        <div className="backContainer backContainerPenthouses">
                            <img src="img/arrow-left.svg" alt="arrow-left-svg" width="50" height="50"/>
                            <b className="backContainerText">Назад</b>
                        </div>
                    </Link>
                    <div className="penthousesContentTitle">
                        <div className="titleLineTop"></div>
                        <h1>
                           Пентхаусы
                        </h1>
                        <div className="titleLinebottom"></div>
                    </div>
                    <div className="cardApartmentsContainer">
                        {itemsCardPethouses.map((item, index) => (
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
            </div>
            <Footer/>
        </div>
    );
}

export default Penthouses;