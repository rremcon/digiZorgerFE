import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";


function Profielpagina() {

    const {user} = useContext(AuthContext)

    return (
        <>
        <main>
            <div className="account-page">
            <h1 className="page-title">Mijn Profielpagina</h1>
            <br/>
            <br/>
            <h2>Welkom!</h2>
            <p><span>{ user.username }</span></p>
            <br/>
            <h3>U bent succesvol ingelogd!</h3>
            <br/>
            <h4>Klik op "Startpagina" om te beginnen.</h4>
            <br/>
            <h3>Mijn gegevens</h3>
            <br/>
            <br/>
            <span>AccountNr. {user.id}</span>
            <span>Email: {user.email}</span>
            <br/>
            <span>{user.firstname}</span>
            <span>{user.lastname}</span>
            <span>{user.address}</span>
            <span>{user.zipcode}</span>
            <span>{user.city}</span>
            <span>{user.country}</span>
            </div>
        </main>
        </>
    );
}

export default Profielpagina;