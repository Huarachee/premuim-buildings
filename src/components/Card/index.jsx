import React from "react";
import { Link } from "react-router-dom";

import style from "./Card.module.scss";

function Card({ apartmentsUrlImg, apartmentsName, squareApartment, priceApartment, apartmentDescription, watchApartmentsLink }) {
    return(
        <div className={style.cardWrapper}>
            <div className={style.cardImgContainer}>
                <img className={style.cardImg} src={apartmentsUrlImg} alt="" width={550} height={300}/>
            </div>
            
            <h4 className={style.apartmentsName}>
                {apartmentsName}
            </h4>
            <div className={style.cardLineTop}></div>
            <p className={style.apartmentDescription}>
                {apartmentDescription}
            </p>
            <div className={style.cardLineBottom}></div>
            <div className={style.infoBottomContainer}>
                <div className={style.squareApartmentContainer}>
                    <p className={style.squareApartmentTitle}>
                        Площадь:
                    </p>
                    <p className={style.squareApartment}>
                        {squareApartment}
                    </p>
                </div>
                
                <div className={style.priceApartmentContainer}>
                    <p className={style.priceApartmentTitle}>
                        Цена:
                    </p>
                    <p className={style.pricePenthouses}>
                        {priceApartment}
                    </p>
                </div>
            </div>
            <Link to={`${watchApartmentsLink}`}>
                <div className={style.watchPenthousesBtn}>
                    Смотреть
                </div>
            </Link>     
        </div>
    );
}

export default Card;