import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import './Activities.css';
import Activity from "../components/Activity/Activity";

function Activities() {

    const [activities, setActivities] = useState([]);
    const [confirm, setConfirm] = useState(false);


    useEffect(()=> {
        async function fetchActivities() {
            try {
                // const response = await axios.get('http://localhost:8080/activities/day?day=Maandag');
                const response = await axios.get('http://localhost:8080/activities/category/day?category=ProjectBasis&day=Donderdag');
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

                <h1 className="page-title">Projectmatige Activiteiten Donderdag</h1>
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
                                                className="reservate-button"
                                                type="submit"
                                                // onClick={reservateActivity}
                                            >Inschrijven
                                                {confirm === true && <p>U bent ingeschreven</p>}
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
