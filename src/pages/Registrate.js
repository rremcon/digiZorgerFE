import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";


function Registrate() {

    const { login } = useContext( AuthContext )
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null)
    const [choice, toggleChoice] = useState(false)

    function toggle() {
        toggleChoice(choice => !choice)
    }

    const [salutation, setSalutation] = useState("*");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [helpingtool, setHelpingtool] = useState('Niet van toepassing');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(e) {
        e.preventDefault()

        setErrorMessage(null)
        if (salutation === '' || lastname === '' || phone === '' || email === '' || helpingtool === '' || username === ''|| password === '') {
            setErrorMessage ("*VERPLICHTE VELDEN ONGELDIG")
            console.log("*VERPLICHTE VELDEN ONGELDIG")
            return false;
        }

        try {
            const response = await axios.post('http://localhost:8080/users/register',{
            // const response = await axios.post('https://localhost:8443/users/register',{
                salutation: salutation,
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                address: address,
                zipcode: zipcode,
                city: city,
                phone: phone,
                email: email,
                helpingtool: helpingtool,
                username: username,
                password: password,
            })
            // login( response.data.accessToken )
            console.log(response.data)
            console.log( "DE GEBRUIKER IS GEREGISTREERD" )
            navigate('/')

        } catch ( e ) {
            console.error( e )
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
                <form className="form" onSubmit={registerUser}>
                    <h1 className="form-title">Registreren</h1>
                    <p>*Alleen toegankelijk voor geautoriseerde zorginstellingen.</p>
                    <br/>
                    <label htmlFor="salutation">
                        *Aanhef:
                        <select
                            type="text"
                            id="salutation"
                            name="salutation-field"
                            value={salutation}
                            onChange={(e) => setSalutation(e.target.value)}
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

                    <label htmlFor="">
                        -----------------------------------------------------------------------------
                    </label>

                    <label htmlFor="firstname-field">Voornaam</label>
                    <input
                        type="text"
                        id="firstname-field"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label htmlFor="lastname-field">*Achternaam</label>
                    <input
                        type="text"
                        id="lastname-field"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <label htmlFor="birthdate-field">Geboortedatum (jjjj-mm-dd)</label>
                    <input
                        type="text"
                        id="birthdate-field"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                    <label htmlFor="address-field">Adres</label>
                    <input
                        type="text"
                        id="address-field"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <label htmlFor="zipcode-field">Postcode</label>
                    <input
                        type="text"
                        id="zipcode-field"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                    />
                    <label htmlFor="city-field">Woonplaats</label>
                    <input
                        type="text"
                        id="city-field"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label htmlFor="phone-field">*Telefoonnummer</label>
                    <input
                        type="text"
                        id="phone-field"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="email-field">*Email</label>
                    <input type="email"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="helpingtool">
                        *Hulpmiddel:
                        <select
                            type="text"
                            id="helpingtool"
                            name="helpingtool-field"
                            value={helpingtool}
                            onChange={(e) => setHelpingtool(e.target.value)}
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
                    <br/>
                    <br/>
                    <br/>
                    <h2>Na registratie kunt u steeds weer opnieuw inloggen met dezelfde gegevens.</h2>
                    <br/>
                    <h3>Zorg er daarom voor dat u goed weet wat u hieronder invult, vóór dat u op de
                        "Registreer" knop
                        klikt.</h3>
                    <br/>
                    <label htmlFor="username-field">*Gebruikersnaam</label>
                    <input type="text"
                           value={username}
                           onChange={e => setUsername(e.target.value)}
                    />
                    <label htmlFor="password-field">*Wachtwoord</label>
                    <input type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                    />

                    <br/>
                    <br/>
                    <div>{errorMessage}</div>

                </form>

                <h3>Ik geef toestemming voor de verwerking van mijn persoonlijke gegevens.</h3>
                <br/>

                <input
                    type="checkbox"
                    checked={choice}
                    onChange={(e) => {
                        toggleChoice(e.target.checked)
                    }}
                />

                {choice ? <p>JA</p> : <p>NEE GEEN</p>}


                <Button
                    className="toggleButton"
                    type="button"
                    // type="submit"
                    onClick={toggle}
                    children="Toestemming"
                />

                <br/>

                <Button
                    className="sign-up-button"
                    type="submit"
                    onClick={registerUser}
                    disabled={!choice}
                    children="Registreer"
                />

            </div>
            </div>
            </main>
        </>
    );
}

export default Registrate;