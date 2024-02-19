import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";


function Profile() {

    const {user} = useContext(AuthContext)

    return (
        <>
        <main>
            <div className="profile-page">
                <h1 className="page-title">Persoonlijk account</h1>
                <p><span>{user.username}</span></p>
                <br/>
                <h2>Successvol ingelogd, welkom!</h2>
                <br/>
                {/*<h3>Klik op "Startpagina" om te beginnen.</h3>*/}
                <br/>
                <br/>
                <h3>Gegevens</h3>
                <br/>
                <p>AccountNr. {user.id}</p>
                <p>Email: {user.email}</p>
                <br/>
                <p>Geboortedatum: {user.birthdate}</p>
                <br/>
                <p>{user.salutation}</p>
                <p>{user.firstname}</p>
                <p>{user.lastname}</p>
                <p>{user.address}</p>
                <p>{user.zipcode}</p>
                <p>{user.city}</p>
                <p>{user.phone}</p>
                <p>{user.helpingtool}</p>

            </div>
        </main>
        </>
    );
}

export default Profile;