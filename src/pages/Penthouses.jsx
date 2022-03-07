import React from "react";

import { Header, Footer, Card } from '../components/index';

function Penthouses({ itemsCardPethouses }) {
    return(
        <div className="penthousesContent">
            <Header/>
            <div className="container">
                <div className="penthousesContentWrapper">
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
                                watchPenthousesLink={item.watchPenthousesLink}
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