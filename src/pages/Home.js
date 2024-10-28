import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";
import LogoBig from "../components/Picture/LogoBig";
import logo from "../assets/newlogo-digizorger.png";
import Nav from "../components/Nav/Nav";


function Home() {

    // const {isAuth} = useContext(AuthContext);


        return (

            <>
                <header id="header" className="outer-content-container">
                    <div className="inner-content-container-header">

                        <LogoBig
                            img={logo}
                            imgTitle="logo"
                        />

                        <Nav/>

                    </div>

                </header>


                <footer id="footer" className="outer-content-container">
                    <div className="inner-content-container">
                        digizorger.nl &copy; 2025
                    </div>
                </footer>

            </>

        );
        }

        export default Home;