import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });
    const navigate = useNavigate();


    useEffect(()=> {
        // haalt de JWT op uit de Local Storage
        //(key die in de backend is gedefinieerd)
        const storedToken = localStorage.getItem('token')
        console.log(storedToken)

        // als er een token is, wordt opnieuw de gebruikersdata opgehaald
        if(storedToken) {
            const decodedToken = jwt_decode(storedToken)
            console.log(decodedToken.exp)

            if (Math.floor (Date.now()/1000) < decodedToken.exp) {
                console.log("DE GEBRUIKER IS NOG STEEDS INGELOGD")
                void fetchUserData(storedToken, decodedToken.sub)
            } else {
                console.log("TOKEN VERLOPEN")
                localStorage.removeItem('token')
            }
        } else {
            //als er geen token is gebeurt er niks
            setAuth({
                ...auth,
                isAuth: false,
                user: null,
                status: "done"
            });
        }

    }, []);


    function handleLogin(jwt) {
        console.log("DE GEBRUIKER IS INGELOGD")
        localStorage.setItem('token', jwt)

        const decodedToken = jwt_decode(jwt);
        console.log(decodedToken)

        void fetchUserData(jwt, decodedToken.sub, "/profielpagina")
    }


    async function fetchUserData(jwt, id, redirect) {
        try {
                const response = await axios.get(`http://localhost:8080/accounts/${id}`, {
                headers:
                    {
                        //key        &   value pairs
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    }
            })

            setAuth(
                {
                    ...auth,
                    isAuth: true,
                    user: {
                        id: response.data.id,
                        email: response.data.email,
                        username: response.data.username,

                        firstname:response.data.firstname,
                        lastname:response.data.lastname,
                        birthdate:response.data.birthdate,
                        address:response.data.address,
                        zipcode:response.data.zipcode,
                        city:response.data.city,
                        country:response.data.country,
                        authorities:response.data.authority,
                    },
                    status: "done"
                })

            console.log(response)

            if (redirect) {
                navigate(redirect)
            }
            console.log(response)

        } catch (e) {
            console.error(e)
            setAuth( {
                ...auth,
                status: "done"
            })
        }
    }


    function handleLogout(e) {
        // e.preventDefault();
        console.log('DE GEBRUIKER IS UITGELOGD')
        localStorage.removeItem('token')
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        navigate("/")
    }


    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        status: auth.status,
        login: handleLogin,
        logout: handleLogout
    }


    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "done" ? children : <p>Loading..</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;