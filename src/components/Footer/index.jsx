import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div className={style.footerContent}>
            <div className={style.container}>
                <Link to="/" exact>
                    <div className={style.footerLogo}>
                        <div className={style.footerLogoBox}>
                            <img src="img/logo.svg" alt="logo" width={50} height={50}/>
                        </div>
                        <h1 className={style.footerTitle}>
                            Хмельницкий, 11
                        </h1>
                    </div>
                </Link>

                <div className={style.footerInfo}>
                    <div className={style.infoContent}>
                        <span>
                            Адрес: 
                        </span>
                        <p>
                            Пионерская улица, 30
                        </p>
                    </div>
                    <div className={style.infoContent}>
                        <span>
                            Телефон: 
                        </span>
                        <a href="tel:8 (846) 911-13-37">
                            +7 846 911-13-37
                        </a>
                    </div>
                    <div className={style.infoContent}>
                        <span>
                            Отдел продаж: 
                        </span>
                        <p>
                           c 10:00 - 20:00 
                        </p>
                    </div>
                    <div className={style.infoContent}>
                        <span>
                            E-mail: 
                        </span>
                        <p>
                            khmelnitskyBuildings@yandex.ru
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;