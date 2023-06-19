import React from 'react';
import {Link, useParams} from "react-router-dom";
import Picture from "../components/Picture/Picture";
// import vrijetijdlogo from "../assets/vrijetijdlogo.png";
import boeklogo from "../assets/boeklogo.jpg";
import beweginglogo from "../assets/beweginglogo.jpg";
import mobiliteitlogo from "../assets/mobiliteitlogo.png";
import boodschappenlogo from "../assets/boodschappenlogo.png";
import Button from "../components/Button/Button";


function Startpagina() {


    return (
        <>
            <main className="container">
                <h1 className="page-title">Startpagina</h1>
                <ul className="choice-items-overview">
                                <li className="choice-items"
                                >
                                    <div className="choice-item">
                                        <Link to={`/producten/`}>
                                            <Picture className="item-picture"
                                                     img={mobiliteitlogo}
                                                     imgTitle="logo"
                                            />
                                            <button
                                                className="select-button"
                                                type="submit"
                                            >Mobiliteit
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="choice-item">
                                        <Link to={`/producten/`}>
                                            <Picture className="item-picture"
                                                     img={boodschappenlogo}
                                                     imgTitle="logo"
                                            />
                                            <button
                                                className="select-button"
                                                type="submit"
                                            >Boodschappen
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="choice-item">
                                        <Link to={`/activiteiten/`}>
                                            <Picture className="item-picture"
                                                     img={beweginglogo}
                                                     imgTitle="logo"
                                            />
                                            <button
                                                className="select-button"
                                                type="submit"
                                            >Beweging
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="choice-item">
                                        <Link to={`/boeken/`}>
                                            <Picture className="item-picture"
                                                     img={boeklogo}
                                                     imgTitle="logo"
                                            />
                                            <Button
                                                className="select-button"
                                                type="submit"
                                            >Boeken
                                            </Button>
                                        </Link>
                                    </div>
                                </li>
                </ul>
            </main>
        </>
    );
}

export default Startpagina;
