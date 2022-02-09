import React from "react";

import { Header, Footer, Card } from '../components/index';

function Apartments({ itemsCardApartments }) {
    return(
        <div className="apartmentsContent">
            <Header/>
            <div className="container">
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
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Apartments;