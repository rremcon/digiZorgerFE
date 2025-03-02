import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";
import Nav from "../components/Nav/Nav";
import {NavLink, useNavigate} from "react-router-dom";


function Profile() {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate();


    return (
        <>
        <main className="outer-content-container">
            <div className="inner-content-container">

                <LogoSmall
                    img={logo}
                    imgTitle="logo"
                    onClick={() => navigate('/')}
                />

                <h1 className="page-title">Persoonlijk account</h1>
                <p><span>{user.username}</span></p>
                <br/>
                <h2>Successvol ingelogd, welkom!</h2>
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