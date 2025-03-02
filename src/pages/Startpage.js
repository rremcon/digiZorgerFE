import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import activiteitenfiguur from "../assets/activiteitenfiguur.png";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";
import Service from "../components/Service/Service";


function Startpage() {

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

                    <h1 className="page-title">Startpagina</h1>

                    <div className="grid-service-container">

                        <Service
                            link={`/activiteiten/standaardbasis`}
                            img={activiteitenfiguur}
                            children="Standaard Activiteiten"
                        />

                        <Service
                            link={`/activiteiten/projectbasis`}
                            img={activiteitenfiguur}
                            children="Projectmatige Activiteiten"
                        />

                        </div>
                    </div>
            </main>
        </>
);
}

export default Startpage;
