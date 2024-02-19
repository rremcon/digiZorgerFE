import React, {useEffect, useState} from 'react';
import axios from "axios";
import Button from "../../components/Button/Button";
import activity from "../../components/Activity/Activity";
import {Link} from "react-router-dom";


function AdminOrders() {

    const token = localStorage.getItem('token');
    const [orders, setOrders] = useState([]);
    const [selectDelete, setDelete] = useState(false);


    useEffect(()=> {
        const controller = new AbortController();
        async function fetchOrders() {

            try {
                // const response = await axios.get('http://digizorgerbackend.azurewebsites.net/reservations', {
                const response = await axios.get('http://localhost:8080/reservations', {
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
            // const response = await axios.delete(`http://digizorgerbackend.azurewebsites.net/reservations/${id}`, {
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
                    <h1 className="page-title">Inschrijvingen</h1>

                    <div className="activity-grid-container">

                        <Link to={`/reserveringen/biljarten`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Biljarten"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/bingo`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Bingo"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/dansen`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Dansen"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/fietsen`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Fietsen"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/golfen`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Golfen"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/haken`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Haken"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/jeudeboule`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Jeu De Boule"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/kaarten`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Kaarten"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/sjoelen`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Sjoelen"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/digitraining`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Training Digitalis"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/wandelen`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Wandelen"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/weekendweg`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Weekend Weg"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/welkom`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Welkom Nieuwe Bewoners"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/workshop`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Workshop"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/yoga`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Yoga"
                            />
                        </Link>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <Link to={`/reserveringen/zwemmen`}>
                            <Button
                                className="activity-type-button"
                                type="button"
                                children="Zwemmen"
                            />
                        </Link>
                        {/*/!*<br/>*!/*/}
                        {/*/!*<br/>*!/*/}
                        {/*<Link to={`/reserveringen/wachtend`}>*/}
                        {/*    <Button*/}
                        {/*        className="activity-type-button"*/}
                        {/*        type="button"*/}
                        {/*        children="Wachtend"*/}
                        {/*    />*/}
                        {/*</Link>*/}

                    </div>


                    <br/>
                    <table className="table">
                        <thead>
                        <tr>
                            {/*<th>Id</th>*/}
                            <th>Activiteit</th>
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
                                <td>{order.selecteditem}</td>
                                {/*<td>{order.registrant.salutation}</td>*/}
                                <td>{order.registrant}</td>
                                <td>{order.status}</td>

                                {/*<td>{order.account}</td>*/}
                                {/*<td>{order.activity}</td>*/}
                                {/*<td>{order.account_id}</td>*/}
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

                                <Button
                                    className="select-button"
                                    type="submit"
                                    // onClick={(e) => changeSelected(e, order.id)}
                                    children="wijzig"
                                />

                                <Button
                                    className="select-button"
                                    type="submit"
                                    onClick={() => deleteSelected(order.id)}
                                    children="verwijder"
                                />

                            </tr>
                        })}
                        </tbody>
                    </table>

                    <Button
                        className="print-list-button"
                        type="submit"
                        // onClick={() => printList(order.orderList)}
                        children="Lijst printen"
                    />

                </div>
            </main>
        </>
    );
}

export default AdminOrders;
