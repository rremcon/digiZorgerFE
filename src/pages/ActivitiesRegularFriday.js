import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import './Activities.css';
import Activity from "../components/Activity/Activity";
import Result from "../components/Result/Result";
import {ClickContext} from "../context/ClickContext";
import {AuthContext} from "../context/AuthContext";
import './Activities.css';
import "../components/Activity/Activity.css";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";


function Activities() {

    const {user} = useContext(AuthContext);
    const {minOneFunction, plusOneFunction, clicks} = useContext (ClickContext)
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);
    const [confirm, setConfirm] = useState(false);


    useEffect(()=> {
        async function fetchActivities() {
            try {
                // const response = await axios.get('http://localhost:8080/activities/day?day=Vrijdag');
                const response = await axios.get('http://localhost:8080/activities/category/day?category=StandaardBasis&day=Vrijdag');
                setActivities(response.data);
                console.log(response.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchActivities();
    }, []);



    return (
        <>
            <main className="outer-content-container">
                <div className="inner-content-container">

                    {/*{loading && <p>Loading...</p>}*/}
                    {/*{error && <p>Error: Could not fetch data!</p>}*/}

                    <LogoSmall
                        img={logo}
                        imgTitle="logo"
                        onClick={() => navigate('/')}
                    />

                    <h1 className="page-title">Standaard Activiteiten Vrijdag</h1>

                    <div className="days-row-container">

                        <Link to={`/activiteiten/standaardbasis/maandag`}>
                            <Button
                                className="day-button"
                                type="button"
                                children="Maandag"
                            />
                        </Link>
                        <br/>
                        <br/>
                        <Link to={`/activiteiten/standaardbasis/dinsdag`}>
                            <Button
                                className="day-button"
                                type="button"
                                children="Dinsdag"
                            />
                        </Link>
                        <br/>
                        <br/>
                        <Link to={`/activiteiten/standaardbasis/woensdag`}>
                            <Button
                                className="day-button"
                                type="button"
                                children="Woensdag"
                            />
                        </Link>
                        <br/>
                        <br/>
                        <Link to={`/activiteiten/standaardbasis/donderdag`}>
                            <Button
                                className="day-button"
                                type="button"
                                children="Donderdag"
                            />
                        </Link>
                        <br/>
                        <br/>
                        <Link to={`/activiteiten/standaardbasis/vrijdag`}>
                            <Button
                                className="day-button"
                                type="button"
                                children="Vrijdag"
                            />
                        </Link>

                    </div>

                    <br/>
                    <br/>

                    <div className="grid-service-container">

                        {
                            activities.map((activity) => {
                                return (

                                    // <div className="grid-service-container"
                                    //      key={activity.id} >

                                    <Link to={`/activiteit/${activity.id}`}>

                                        <
                                            Activity
                                            className="grid-service-tile"
                                            key={activity.id}
                                            id={activity.id}
                                            name={activity.name}
                                            img={activity.img}
                                            day={activity.day}
                                            date={activity.date}
                                            time={activity.time}
                                            location={activity.location}
                                            price={activity.price}
                                            availableplaces={activity.availableplaces}
                                        />

                                        <Button
                                            className="select-button"
                                            type="submit"
                                            onClick={plusOneFunction}
                                        >
                                            Aanmelden
                                        </Button>

                                    </Link>

                                    // </div>
                                )
                            })
                        }

                    </div>

                </div>
            </main>
        </>
    );
}

export default Activities;
