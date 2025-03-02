import React, { useState } from 'react';
import axios from 'axios';
import Button from "../components/Button/Button";
import {useNavigate} from "react-router-dom";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";

function MobilityTicket() {

    const navigate = useNavigate();
    const [inhabitantSalutation, setInhabitantSalutation] = useState('*');
    const [inhabitantName, setInhabitantName] = useState('');
    const [inhabitantHelpingTool, setInhabitantHelpingTool] = useState('Niet van toepassing');
    const [confirm, setConfirm] = useState(false);

    async function addMobility(e) {
        // voorkom refresh
        e.preventDefault();
        console.log(inhabitantSalutation, inhabitantName, inhabitantHelpingTool);

        try {
            const response = await axios.post('http://localhost:8080/mobility', {
                //     id
                salutation: inhabitantSalutation,
                lastname: inhabitantName,
                helpingtool: inhabitantHelpingTool,
            });

            console.log(response.data);
            setConfirm(true);

        } catch(e) {
            console.error(e);
        }
    }

    return (
        <>
            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoSmall
                        img={logo}
                        imgTitle="logo"
                        onClick={() => navigate('/')}
                    />

                    <div className="form-container">

                        <form className="form" onSubmit={addMobility}>
                            <h1 className="form-title">Mobiliteit aanvragen</h1>

                            <label htmlFor="inhabitant-salutation">
                                Aanhef:
                                <select
                                    type="text"
                                    id="inhabitant-salutation"
                                    name="inhabitant-salutation-field"
                                    value={inhabitantSalutation}
                                    onChange={(e) => setInhabitantSalutation(e.target.value)}
                                >
                                    <option value="*">
                                        *
                                    </option>
                                    <option value="Dhr.">
                                        Dhr.
                                    </option>
                                    <option value="Mevr.">
                                        Mevr.
                                    </option>
                                </select>
                            </label>

                            <label htmlFor="inhabitant-name">
                                Achternaam:
                                <input
                                    type="text"
                                    name="inhabitant-name-field"
                                    id="inhabitant-name"
                                    value={inhabitantName}
                                    onChange={(e) => setInhabitantName(e.target.value)}
                                />
                            </label>

                            <label htmlFor="inhabitant-helpingtool">
                                Hulpmiddel:
                                <select
                                    type="text"
                                    id="inhabitant-helpingtool"
                                    name="inhabitant-helpingtool-field"
                                    value={inhabitantHelpingTool}
                                    onChange={(e) => setInhabitantHelpingTool(e.target.value)}
                                >
                                    <option value="niet van toepassing">
                                        Niet van toepassing
                                    </option>
                                    <option value="rolstoel">
                                        Rolstoel
                                    </option>
                                    <option value="rolator">
                                        Rolator
                                    </option>
                                    <option value="wandelstok">
                                        Wandelstok
                                    </option>
                                    <option value="scootmobiel">
                                        Scootmobiel
                                    </option>
                                </select>
                            </label>

                        </form>

                        <Button
                            type="submit"
                            onClick={addMobility}
                        >Toevoegen
                            {confirm === true && <p>Mobiliteit aangevraagd!</p>}
                        </Button>

                    </div>
                </div>
            </main>
        </>
    );
}

export default MobilityTicket;