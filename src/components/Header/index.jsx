import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className={style.headerContent}>
            <div className={style.container}>
                <div className={style.headerContentBox}>
                    <Link className="link" to="/" exact>
                        <div className={style.headerLogo}>
                            <img src="img/logo.svg" alt="" />
                            <p className={style.headerLogoText}>
                                Хмельницкий, 11
                            </p>
                        </div>
                    </Link>
                    <menu className={style.menuItems}>
                        <ul>
                            <Link className="link" to="/aboutUs" exact>
                                <li>
                                    О нас
                                </li>
                            </Link>
                            <Link className="link" to="/constructionProgress" exact>
                                <li>
                                    Ход строительства
                                </li>
                            </Link>
                            <Link className="link" to="/apartments" exact>
                                <li>
                                    Квартиры
                                </li>
                            </Link>
                            <Link className="link" to="/penthouses" exact>
                                <li>
                                    Пентхаусы
                                </li>
                            </Link>
                        </ul>
                    </menu>
                </div>
            </div>
        </div>
    );
}

export default Header;