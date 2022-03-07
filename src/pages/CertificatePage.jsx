import React from "react";


import { Header, Footer } from '../components/index';

function CertificatePage() {
    return(
        <div className="certificatePageContent">
            <Header/>
            <div className="certificatePageContentContainer">
                <div className="container">
                    <div className="certificateBox">
                        <h1 className="certificateBoxTitle">Спасибо, что оставили заявку!</h1>
                        <p className="certificateBoxText">
                            В ближайшее время мы вам позвоним и пригласим на осмотр интересующей квартиры.
                        </p>
                    </div>
                </div> 
            </div>
            <Footer/>
        </div>
    );
}

export default CertificatePage;