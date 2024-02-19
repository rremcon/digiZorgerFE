import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import './Activities.css';
import Activity from "../components/Activity/Activity";
import Result from "../components/Result/Result";
import {ClickContext} from "../context/ClickContext";
import {AuthContext} from "../context/AuthContext";
import './Activities.css';
import "../components/Activity/Activity.css";


function Activities() {

    const {user} = useContext(AuthContext);
    const {minOneFunction, plusOneFunction, clicks} = useContext (ClickContext)

    const [activities, setActivities] = useState([]);
    const [confirm, setConfirm] = useState(false);


    useEffect(()=> {
        async function fetchActivities() {
            try {
                // const response = await axios.get('http://localhost:8080/activities/day?day=Dinsdag');
                const response = await axios.get('http://localhost:8080/activities/category/day?category=StandaardBasis&day=Dinsdag');
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
            <main>

                {/*{loading && <p>Loading...</p>}*/}
                {/*{error && <p>Error: Could not fetch data!</p>}*/}

                <h1 className="page-title">Standaard Activiteiten Dinsdag</h1>
                <br/>
                <br/>
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
                <div className="grid-container">
                    {
                        activities.map((activity) => {
                            return (

                                <article className="grid-box"
                                         key={activity.id}>
                                    <Link to={`/activiteit/${activity.id}`}>
                                        {/*<div className="grid-box-head">*/}
                                        <h1 className="box-title">{activity.name.slice(0, 25)}</h1>
                                        <br/>
                                        <img className="box-image" src={activity.img} alt={activity.title}/>
                                        {/*</div>*/}
                                        <div className="grid-box-content">
                                            <h2>{activity.day}</h2>
                                            <h2>{activity.date}</h2>
                                            <h2>{activity.time}</h2>
                                            <br/>
                                            <h2>Locatie: {activity.location}</h2>
                                            <br/>
                                            <h2>Totaal beschikbaar: {activity.availableplaces} plekken</h2>
                                            <br/>
                                            <span className="box-price">€{activity.price}</span>

                                            {/*<Activity*/}
                                            {/*    className="activity-item"*/}
                                            {/*    // id={activity.id}*/}
                                            {/*    name={activity.name}*/}
                                            {/*    img={activity.img}*/}
                                            {/*    day={activity.day}*/}
                                            {/*    date={activity.date}*/}
                                            {/*    time={activity.time}*/}
                                            {/*    location={activity.location}*/}
                                            {/*    price={activity.price}*/}
                                            {/*    availableplaces={activity.availableplaces}*/}
                                            {/*/>*/}

                                            <br/>
                                            <br/>

                                            <Button
                                                className="select-button"
                                                type="submit"
                                                onClick={plusOneFunction}
                                            >Aanmelden
                                            </Button>

                                        </div>
                                    </Link>

                                </article>
                            )
                        })
                    }

                </div>
            </main>
        </>
    );
}

export default Activities;
