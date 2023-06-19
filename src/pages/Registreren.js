import React, { useContext, useState } from 'react';
import axios from "axios";
import Button from "../components/Button/Button";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


function Registreren() {

    const { login } = useContext( AuthContext )
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null)

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(e) {
        e.preventDefault()

        setErrorMessage(null)
        if (username === ''|| password === '' || email === '') {
            setErrorMessage ("*VERPLICHTE VELDEN ONGELDIG")
            console.log("*VERPLICHTE VELDEN ONGELDIG")
            return false;
        }

        try {
            const response = await axios.post('http://localhost:8080/users/register',{
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                address: address,
                zipcode: zipcode,
                city: city,
                country: country,
                email: email,
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
        <main className="main-outer-container">
            <div className="form-container">

            <form onSubmit={registerUser}>
                <h1 className="form-title">Registreren</h1>
                <br/>
                <label htmlFor="firstname-field">Voornaam</label>
                <br/>
                <input
                    type="text"
                    id="firstname-field"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <br/>
                <label htmlFor="lastname-field">Achternaam</label>
                <br/>
                <input
                    type="text"
                    id="lastname-field"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <br/>
                <label htmlFor="birthdate-field">Geboortedatum (jjjj-mm-dd)</label>
                <br/>
                <input
                    type="text"
                    id="birthdate-field"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <br/>
                <label htmlFor="address-field">Adres</label>
                <br/>
                <input
                    type="text"
                    id="address-field"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <br/>
                <label htmlFor="zipcode-field">Postcode</label>
                <br/>
                <input
                    type="text"
                    id="zipcode-field"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />
                <br/>
                <label htmlFor="city-field">Woonplaats</label>
                <br/>
                <input
                    type="text"
                    id="city-field"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                {/*<br/>*/}
                {/*<label htmlFor="country-field">Country</label>*/}
                {/*<br/>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    id="country-field"*/}
                {/*    value={country}*/}
                {/*    onChange={(e) => setCountry(e.target.value)}*/}
                {/*/>*/}
                <br/>
                <br/>
                <br/>
                <h2>Na registratie kunt u steeds weer opnieuw inloggen met dezelfde gegevens.</h2>
                <h3>Zorg er daarom voor dat u goed weet wat u hieronder invult, vóór dat u op de "Registreer" knop klikt.</h3>
                <br/>
                <label htmlFor="email-field">*Email</label>
                <br/>
                <input type="email"
                       value={ email }
                       onChange={ e => setEmail( e.target.value ) }
                />
                <br/>
                <label htmlFor="username-field">*Gebruikersnaam</label>
                <br/>
                <input type="text"
                       value={ username }
                       onChange={ e => setUsername( e.target.value ) }
                />
                <br/>
                <label htmlFor="password-field">*Wachtwoord</label>
                <br/>
                <input type="password"
                       value={ password }
                       onChange={ e => setPassword( e.target.value ) }
                />
                <br/>
                <br/>
                <div>{errorMessage}</div>
                <Button className="sign-up-button"
                        type="submit"
                        onClick={registerUser}
                >Registreer
                </Button>
                <br/>
                <br/>
            </form>
            </div>
        </main>
    );
}

export default Registreren;