import React, {useEffect, useState} from 'react';
import axios from "axios";
import Button from "../../components/Button/Button";
import '../Activities.css';


function AdminActivities() {

    const token = localStorage.getItem('token');
    const [activities, setActivities] = useState([]);
    const [selectDelete, setDelete] = useState(false);


    useEffect(()=> {
        const controller = new AbortController();
        async function fetchActivities() {

            try {
                const response = await axios.get('http://localhost:8080/activities/admin', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    signal: controller.signal,
                });
                setActivities(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        void fetchActivities();
        return function cleanup() {
            controller.abort();
        }
    }, [selectDelete]);


    function deleteSelected(activityId) {
        setDelete(!selectDelete);
        deleteActivity(activityId)
    }


    async function deleteActivity(id) {
        try {
            const response = await axios.delete(`http://localhost:8080/activities/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <main>
                <div className="inner-container">
                    <h1 className="page-title">Activiteiten</h1>
                    <br/>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Categorie</th>
                            <th>Naam</th>
                            <th>Dag</th>
                            <th>Datum</th>
                            <th>Tijd</th>
                            <th>Locatie</th>
                            <th>Prijs</th>
                        </tr>
                        </thead>
                        <tbody>

                        {activities.map((activity) => {
                            return <tr key={activity.id}>
                                <td>{activity.id}</td>
                                <td>{activity.category}</td>
                                <td>{activity.name}</td>
                                <td>{activity.day}</td>
                                <td>{activity.date}</td>
                                <td>{activity.time}</td>
                                <td>{activity.location}</td>
                                <td>€{activity.price}</td>

                                {/*<Button*/}
                                {/*    className="select-button"*/}
                                {/*    type="submit"*/}
                                {/*    // onClick={(e) => changeSelected(e, activity.id)}*/}
                                {/*    children="wijzig"*/}
                                {/*/>*/}

                                <Button
                                    className="select-button"
                                    type="submit"
                                    onClick={() => deleteSelected(activity.id)}
                                    children="verwijder"
                                />

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

export default AdminActivities;