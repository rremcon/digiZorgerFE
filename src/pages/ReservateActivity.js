import React, {useContext, useEffect, useState} from 'react';
// import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../components/Button/Button";
import Activity from "../components/Activity/Activity";
import Result from "../components/Result/Result";
import {ClickContext} from "../context/ClickContext";
import {AuthContext} from "../context/AuthContext";
import "../components/Activity/Activity.css";
import reservationsWaiting from "./Administrator/ReservationsWaiting";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";


const ReservateActivity = () => {

    const {user} = useContext(AuthContext);
    const {minOneFunction, plusOneFunction, clicks} = useContext (ClickContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // const [choice, toggleChoice] = useState(false)
    const [confirm, setConfirm] = useState(false);
    const [confirmWaiting, setConfirmWaiting] = useState(false);
    const [confirmMailing, setConfirmMailing] = useState(false);
    const [data, setData] = useState([])
    const {id} = useParams()
    const navigate = useNavigate();

    // function toggle() {
    //     toggleChoice(choice => !choice)
    // }
    // console.log(choice)


    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try {
                setError(false);
                const response = await axios.get(`http://localhost:8080/activities/${id}`, {
                    signal: controller.signal,
                });
                setData(response.data);
                console.log(response.data);

            } catch (e) {
                // console.error(e)
                setError(true)

                if(axios.isCancel(e)){
                    // console.log('The axios request was cancelled')
                } else {
                    console.error(e)
                }
            }
            setLoading(false);
        }
        fetchData()

        return function cleanup() {
            controller.abort();
        }
    }, [id])


    async function reservateActivity(e) {
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/reservations/${user.id}/${id}`, {
                id: id,
                // selecteditem: id,
                // account: id,
                // activity: id,
                selecteditem: name,
                registrant: user.lastname + " " + user.address + " " + user.zipcode + " " + user.city + " " + user.phone + " " + user.email,
                quantity: clicks,
                price: price,
            });
            console.log(response.data);
            setConfirm(true);

        } catch(e) {
            console.error(e);
        }
    }



    async function reservateActivityForWaiting(e) {
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/reservations/${user.id}/${id}`, {
                id: id,
                // selecteditem: id,
                // account: id,
                // activity: id,
                selecteditem: name,
                registrant: user.lastname + " " + user.address + " " + user.zipcode + " " + user.city + " " + user.phone + " " + user.email,
                quantity: clicks,
                price: price,
                status: "wachtend",
            });
            console.log(response.data);
            setConfirmWaiting(true);

        } catch(e) {
            console.error(e);
        }
    }



    async function mailingConfirmation(e) {
        e.preventDefault();
        try{
            // const response = await axios.post('http://localhost:8080/sendMail', {
            const response = await axios.post('http://localhost:8080/sendMailWithAttachment', {
                recipient: "digizorger@gmail.com",
                message: "...Ingeschreven voor activiteit...",
                subject: "Inschrijving Activiteit",
                attachment: "C:/users/skikk/downloads/feyenoordopa.gif",
            });
            console.log(response.data)
            setConfirmMailing(true);

        } catch(e) {
            console.error(e);
        }
    }


    const {name, img, date, day, time, location, price, availableplaces} = data;
    return (
        <>
            <main className="outer-content-container">

                {loading && <p>Loading...</p>}
                {error && <p></p>}

                <div className="inner-content-container-header">

                    <LogoSmall
                        img={logo}
                        imgTitle="logo"
                        onClick={() => navigate('/')}
                    />

                    <
                        Activity
                        // className="activity-tile"
                        id={id}
                        name={name}
                        img={img}
                        day={day}
                        date={date}
                        time={time}
                        location={location}
                        price={price}
                        availableplaces={availableplaces - clicks}
                    />

                    {/*<Result*/}
                    {/*    clicks={clicks}*/}
                    {/*/>*/}

                    <br/>
                    <br/>

                    <div className="button-block">

                        <ul className="button-block-ul">


                        {/*<Button*/}
                        {/*    className="quantity-button"*/}
                        {/*    type="button"*/}
                        {/*    onClick={plusOneFunction}*/}
                        {/*    disabled={clicks === 1}*/}
                        {/*    children="Aanmelden"*/}
                        {/*/>*/}


                        {/*<Button*/}
                        {/*    className="quantity-button"*/}
                        {/*    type="button"*/}
                        {/*    onClick={minOneFunction}*/}
                        {/*    disabled={clicks === 0}*/}
                        {/*    children="Annuleren"*/}
                        {/*/>*/}


                        <Button
                            className="reservate-button"
                            type="submit"
                            onClick={reservateActivity}
                            disabled={clicks === availableplaces}
                        >Inschrijven
                            {confirm === true && <p>U bent ingeschreven.</p>}
                        </Button>

                        <Button
                            className="reservate-button"
                            type="submit"
                            onClick={reservateActivityForWaiting}
                        >Inschrijven op wachtlijst
                            {confirmWaiting === true && <p>U bent ingeschreven op de wachtlijst.</p>}
                        </Button>

                        <br/>
                        <br/>

                        <Button
                            className="confirm-mailing-button"
                            type="submit"
                            onClick={mailingConfirmation}
                            disabled={clicks === availableplaces}
                        >Bevestig via mail
                            {confirmMailing === true && <p>Bevestiging is verstuurd.</p>}
                        </Button>

                        </ul>

                    </div>
                    </div>

            </main>
        </>
);
};

export default ReservateActivity;
