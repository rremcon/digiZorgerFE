import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";


function Inloggen() {

    // const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        setErrorMessage(null)
        if (username === ''|| password === '') {
            setErrorMessage ("*VERPLICHTE VELDEN ONGELDIG")
            console.log("*VERPLICHTE VELDEN ONGELDIG")
            return false;
        }
        try {
            const response = await axios.post('http://localhost:8080/login',
                {
                    // email: email,
                    username: username,
                    password: password,
                })

            console.log(response.data)
            login(response.data.jwt)
            console.log( "INGELOGD, BEVEILIGINGSSLEUTEL IS AANGEMAAKT" )
            navigate('/profielpagina')

        } catch(e) {
            console.error(e)
        }
    }


    return (
        <>
            <main className="main-outer-container">
                <div className="form-container">

                    <form onSubmit={handleSubmit}>
                        <h1 className="form-title">Inloggen</h1>
                        <br/>
                        <h2>Hier kunt u inloggen om gebruik te maken van onze diensten.</h2>

                        {/*<br/>*/}
                        {/*<label htmlFor="email-field">Email</label>*/}
                        {/*<br/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    id="email-field"*/}
                        {/*    value={email}*/}
                        {/*    onChange={(e) => setEmail(e.target.value)}*/}
                        {/*    name="email"*/}
                        {/*    />*/}
                        <br/>
                        <label htmlFor="username-field">*Gebruikersnaam</label>
                        <br/>
                        <input
                            type="text"
                            id="username-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            name="username"
                        />
                        <br/>
                        <label htmlFor="password-field">*Wachtwoord</label>
                        <br/>
                        <input
                            type="password"
                            id="password-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            />
                        <br/>
                        <br/>
                        <div>{errorMessage}</div>
                        <Button className="login-button"
                                type="submit"
                                onClick={handleSubmit}
                        >Inloggen
                        </Button>
                        <br/>
                        <br/>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Inloggen;