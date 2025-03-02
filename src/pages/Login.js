import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";
import LogoSmall from "../components/Picture/LogoSmall";
import logo from "../assets/newlogo-digizorger.png";


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        // preventing refresh
        e.preventDefault();

        setErrorMessage(null)
        if (username === ''|| password === '') {
            setErrorMessage ("*VERPLICHTE VELDEN ONGELDIG")
            console.log("*VERPLICHTE VELDEN ONGELDIG")
            return false;
        }
        try {
            const response = await axios.post('http://localhost:8080/login',
            // const response = await axios.post('https://localhost:8443/login',
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
            <main className="outer-content-container">
            <div className="inner-content-container">

                <LogoSmall
                    img={logo}
                    imgTitle="logo"
                    onClick={() => navigate('/')}
                />

                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="form-title">Inloggen</h1>
                        <br/>
                        <h2>Hier kunt u inloggen om gebruik te maken van onze diensten.</h2>
                        <p>*Alleen toegankelijk voor geautoriseerde gebruikers.</p>

                        <br/>
                        <label htmlFor="username-field">*Gebruikersnaam</label>
                        <input
                            type="text"
                            id="username-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            name="username"
                        />
                        <label htmlFor="password-field">*Wachtwoord</label>
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

                        <Button
                            className="login-button"
                            type="submit"
                            onClick={handleSubmit}
                            children="Inloggen"
                        />

                    </form>

                </div>
            </div>
            </main>
        </>
    );
}

export default Login;