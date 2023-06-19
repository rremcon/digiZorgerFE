import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "../components/Button/Button";
import Activiteit from "../components/Activity/Activiteit";
import Result from "../components/Result/Result";
import MinButton from "../components/Button/MinButton";
import AddButton from "../components/Button/AddButton";
import {ClickContext} from "../context/ClickContext";
import {AuthContext} from "../context/AuthContext";


const ReserveerActiviteit = () => {

    const {user} = useContext(AuthContext);
    const {clicks} = useContext (ClickContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // const [choice, toggleChoice] = useState(false)
    const [confirm, setConfirm] = useState(false);
    const [data, setData] = useState([])
    const {id} = useParams()

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
            const response = await axios.post(`http://localhost:8080/orders/create/${user.id}`, {
                orderid: id,
                selecteditem: id,
                quantity: clicks,
                price: price,
                totalprice: clicks*price,
            });
            console.log(response.data);
            setConfirm(true);

        } catch(e) {
            console.error(e);
        }
    }


    const {name, date, day, time, location, price} = data;
    return (
        <>
            <main>
                <div className="inner-container">
                    <form onSubmit={reservateActivity}>
                        {loading && <p>Loading...</p>}
                        {error && <p></p>}

                        <Activiteit
                            className="table"
                            id={id}
                            name={name}
                            date={date}
                            day={day}
                            time={time}
                            location={location}
                            price={price}
                        />
                        <br/>
                        <div className="handling">
                            <MinButton/>  <AddButton/>
                            <br/>
                            <br/>
                            <Result/>
                            <br/>

                            <Button
                                className="reservate-button"
                                type="submit"
                                onClick={reservateActivity}
                            >Reserveer
                                {confirm === true && <p>Gereserveerd!</p>}
                            </Button>

                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default ReserveerActiviteit;
