import React from "react";

import { Header, Footer } from '../components/index';

function ConstructionProgress() {
    return (
        <div className="constructionProgressContent">
            <Header/>
            <div className="container">
                <h1>
                    Здесь будет "ход строительства"
                </h1>
            </div>
            <Footer/>
        </div>
    );
}

export default ConstructionProgress;