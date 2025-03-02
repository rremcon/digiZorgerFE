import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import voegbewonertoe from "../../assets/voegbewonertoe.png";
import profiel from "../../assets/profiel.png";
import uploadimage from "../../assets/imageicoon.png";
import activiteitenfiguur from "../../assets/activiteitenfiguur.png";
import plusactiviteiticoon from "../../assets/add-activity.png";
import inschrijvingenlogo from "../../assets/inschrijvingenlogo.png";
import mobiliteitlogo from "../../assets/mobiliteit-rolator.png";
import logo from "../../assets/newlogo-digizorger.png";
import LogoSmall from "../../components/Picture/LogoSmall";
import Service from "../../components/Service/Service";


function AdminPage() {

    const navigate = useNavigate();


    return (
        <>
            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoSmall
                        img={logo}
                        imgTitle="logo"
                        onClick={() => navigate('/')}
                    />

                    <h1 className="page-title">Dashboard</h1>

                            <div className="grid-service-container">

                                <Service
                                    link={`/bewoners/`}
                                    img={profiel}
                                    children="Bewoners profielen"
                                />

                                <Service
                                    link={`/admin/activiteiten`}
                                    img={activiteitenfiguur}
                                    children="Activiteiten overzicht"
                                />

                                <Service
                                    link={`/personeel/nieuwe-bewoner`}
                                    img={voegbewonertoe}
                                    children="Bewoner toevoegen"
                                />

                                <Service
                                    link={`/personeel/mobiliteit-aanvragen`}
                                    img={mobiliteitlogo}
                                    children="Mobiliteit aanvragen"
                                />

                                <Service
                                    link={`/personeel/uploaden-profielfoto`}
                                    img={uploadimage}
                                    children="Upload een afbeelding"
                                />


                                <Service
                                    link={`/personeel/toevoegen-activiteit`}
                                    img={plusactiviteiticoon}
                                    children="Activiteit toevoegen"
                                />


                                <Service
                                    link={`/personeel/ophalen-reserveringen`}
                                    img={inschrijvingenlogo}
                                    children="Ophalen inschrijvingen"
                                />

                        </div>
                </div>
            </main>
        </>
);
}

export default AdminPage;
