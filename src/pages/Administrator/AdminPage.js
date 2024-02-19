import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import Picture from "../../components/Picture/Picture";
import voegbewonertoe from "../../assets/voegbewonertoe.png";
import profiel from "../../assets/profiel.png";
import uploadimage from "../../assets/imageicoon.png";
import activiteitenfiguur from "../../assets/activiteitenfiguur.png";
import inschrijvingenlogo from "../../assets/inschrijvingenlogo.png";
import mobiliteitlogo from "../../assets/mobiliteit-rolator.png";
import bewonerslogo from "../../assets/bewonerslogo.png";


function AdminPage() {

    return (

        <>
            <main className="container">
                <h1 className="page-title">Manager Dashboard</h1>
                <ul className="choice-items-overview">
                    <li className="choice-items"
                    >

                        <div className="choice-item">
                            <Link to={`/bewoners/`}>
                                <Picture className="item-picture"
                                    // img={bewonerslogo}
                                         img={profiel}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Bewoners profielen"
                                />
                            </Link>
                        </div>


                        <div className="choice-item">
                            <Link to={`/admin/activiteiten`}>
                                <Picture className="item-picture"
                                         img={activiteitenfiguur}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Activiteiten overzicht"
                                />
                            </Link>
                        </div>


                        <div className="choice-item">
                            <Link to={`/personeel/nieuwe-bewoner`}>
                                <Picture className="item-picture"
                                         img={voegbewonertoe}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Bewoner toevoegen"
                                />
                            </Link>
                        </div>

                        <div className="choice-item">
                            <Link to={`/personeel/uploaden-profielfoto`}>
                                <Picture className="item-picture"
                                         img={uploadimage}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Upload een afbeelding"
                                />
                            </Link>
                        </div>


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


                        <div className="choice-item">
                            <Link to={`/personeel/toevoegen-activiteit`}>
                                <Picture className="item-picture"
                                         img={activiteitenfiguur}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Activiteit toevoegen"
                                />
                            </Link>
                        </div>

                        <div className="choice-item">
                            <Link to={`/personeel/ophalen-reserveringen`}>
                                <Picture className="item-picture"
                                         img={inschrijvingenlogo}
                                         imgTitle="logo"
                                />
                                <Button
                                    className="select-button"
                                    type="submit"
                                    children="Ophalen inschrijvingen"
                                />
                            </Link>
                        </div>


                    </li>

                </ul>
            </main>
        </>
    );
}

export default AdminPage;
