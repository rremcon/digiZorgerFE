import React from 'react';
import {Link} from "react-router-dom";
import Button from "../components/Button/Button";
import Picture from "../components/Picture/Picture";
import mobiliteitlogo from "../assets/mobiliteit-rolator.png";
import activiteitenfiguur from "../assets/activiteitenfiguur.png";
import profiel from "../assets/profiel.png";


function Startpage() {

    return (
        <>
            <main className="container">
                <h1 className="page-title">Startpagina</h1>


                <ul className="choice-items-overview">
                    <li className="choice-items"
                    >

                        {/*<div className="choice-item">*/}
                        {/*    <Link to={`/activiteiten`}>*/}
                        {/*        <Picture className="item-picture"*/}
                        {/*                 img={activiteitenfiguur}*/}
                        {/*                 imgTitle="logo"*/}
                        {/*        />*/}
                        {/*        <Button*/}
                        {/*            className="select-button"*/}
                        {/*            type="submit"*/}
                        {/*            children="Alle Activiteiten"*/}
                        {/*        />*/}
                        {/*    </Link>*/}
                        {/*</div>*/}


                        {/*<div className="choice-item">*/}
                        {/*    <Link to={`/mobiliteit/`}>*/}
                        {/*        <Picture className="item-picture"*/}
                        {/*                 img={mobiliteitlogo}*/}
                        {/*                 imgTitle="logo"*/}
                        {/*        />*/}
                        {/*        <Button*/}
                        {/*            className="select-button"*/}
                        {/*            type="submit"*/}
                        {/*            children="Mobiliteit"*/}
                        {/*        />*/}
                        {/*    </Link>*/}
                        {/*</div>*/}


                        {/*<div className="choice-item">*/}
                        {/*    <Link to={`/bewoners/`}>*/}
                        {/*        <Picture className="item-picture"*/}
                        {/*            // img={bewonerslogo}*/}
                        {/*                 img={profiel}*/}
                        {/*                 imgTitle="logo"*/}
                        {/*        />*/}
                        {/*        <Button*/}
                        {/*            className="select-button"*/}
                        {/*            type="submit"*/}
                        {/*            children="Huisgenoten"*/}
                        {/*        />*/}
                        {/*    </Link>*/}
                        {/*</div>*/}


                        <div className="choice-item">
                            <Link to={`/activiteiten/standaardbasis`}>
                                <Picture className="item-picture"
                                         img={activiteitenfiguur}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Standaard Activiteiten"
                                />
                            </Link>
                        </div>

                        <div className="choice-item">
                            <Link to={`/activiteiten/projectbasis`}>
                                <Picture className="item-picture"
                                         img={activiteitenfiguur}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Projectmatige Activiteiten"
                                />
                            </Link>
                        </div>


                    </li>
                </ul>

            </main>
        </>
    );
}

export default Startpage;
