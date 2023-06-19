import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";


function Activiteiten() {

    const [activities, setActivities] = useState([]);

    useEffect(()=> {
        async function fetchActivities() {
            try {
                const response = await axios.get('http://localhost:8080/activities');
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
                <div className="inner-container">
                    <h1 className="page-title">Bewegings Activiteiten</h1>
                    <br/>
                    <br/>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Activiteit</th>
                            <th>Datum</th>
                            <th>Dag</th>
                            <th>Aanvang</th>
                            <th>Locatie</th>
                            <th>Prijs</th>
                        </tr>
                        </thead>
                        <tbody>

                        {activities.map((activity) => {
                            return <tr key={activity.id}>
                                <td>{activity.id}</td>
                                <td>{activity.name}</td>
                                <td>{activity.date}</td>
                                <td>{activity.day}</td>
                                <td>{activity.time}</td>
                                <td>{activity.location}</td>
                                <td>€{activity.price}</td>

                                <Link to={`/activiteit/${activity.id}`}>
                                    <Button
                                        className="select-button"
                                        type="submit"
                                    >Selecteer
                                    </Button>
                                </Link>
                            </tr>
                        })}
                        </tbody>
                    </table>
                    <br/>
                </div>
            </main>
        </>
    );
}

export default Activiteiten;

