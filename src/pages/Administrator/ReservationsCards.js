import React, {useEffect, useState} from 'react';
import axios from "axios";
import Button from "../../components/Button/Button";
import activity from "../../components/Activity/Activity";
import {Link} from "react-router-dom";


function ReservationsCards() {

    const token = localStorage.getItem('token');
    const [orders, setOrders] = useState([]);
    const [selectDelete, setDelete] = useState(false);


    useEffect(()=> {
        const controller = new AbortController();
        async function fetchOrders() {

            try {
                const response = await axios.get('http://localhost:8080/reservations/selecteditem/?selecteditem=KAARTEN', {
                // const response = await axios.get('http://localhost:8080/reservations/selecteditem/status?selecteditem=KAARTEN&status=wachtend', {


                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    signal: controller.signal,
                });
                setOrders(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        void fetchOrders();
        return function cleanup() {
            controller.abort();
        }
    }, [selectDelete]);


    function deleteSelected(orderId) {
        setDelete(!selectDelete);
        deleteOrder(orderId)
    }


    async function deleteOrder(id) {
        try {
            const response = await axios.delete(`http://localhost:8080/reservations/${id}`, {
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
                    <h1 className="page-title">Inschrijvingen Kaarten</h1>
                    <br/>
                    <Button
                        className="print-list-button"
                        type="submit"
                        // onClick={() => printList(order.orderList)}
                        children="Lijst printen"
                    />
                    <br/>
                    <table className="table">
                        <thead>
                        <tr>
                            {/*<th>Id</th>*/}
                            {/*<th>Activiteit</th>*/}
                            {/*<th>Aanhef</th>*/}
                            <th>Registrant</th>
                            {/*<th>AccountId</th>*/}
                            {/*<th>Quantity</th>*/}
                            {/*<th>Prijs</th>*/}
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>

                        {orders.map((order) => {
                            return <tr key={order.id}>
                                {/*<td>{order.id}</td>*/}
                                {/*<td>{order.selecteditem}</td>*/}
                                <td>{order.registrant}</td>
                                <td>{order.status}</td>

                                {/*<td>{order.date}</td>*/}
                                {/*<td>{order.account}</td>*/}
                                {/*<td>{order.quantity}</td>*/}
                                {/*<td>{order.price}</td>*/}
                                {/*<td>{order.price * order.quantity}</td>*/}

                                {/*<Button*/}
                                {/*    className="select-button"*/}
                                {/*    type="submit"*/}
                                {/*    // onClick={(e) => changeSelected(e, order.id)}*/}
                                {/*    children="wijzig"*/}
                                {/*/>*/}

                                {/*<Button*/}
                                {/*    className="select-button"*/}
                                {/*    type="submit"*/}
                                {/*    onClick={() => deleteSelected(order.orderid)}*/}
                                {/*    children="verwijder"*/}

                                {/*/>*/}

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

export default ReservationsCards;