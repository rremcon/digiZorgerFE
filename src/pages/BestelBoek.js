import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "../components/Button/Button";
import Boek from "../components/Book/Boek";
import {AuthContext} from "../context/AuthContext";


const BestelBoek = () => {

    const {user} = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [data, setData] = useState([])
    const [paytype, setSelectedPay] = useState('');

    const {id} = useParams()


    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try {
                setError(false);
                const response = await axios.get(`http://localhost:8080/books/${id}`, {
                    signal: controller.signal,
                });
                setData(response.data);
                console.log(response.data);

            } catch (e) {
                setError(true)

                if(axios.isCancel(e)){
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



    async function confirmBuyBook(e) {
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/orders/create/${user.id}`, {
                orderid: id,
                selecteditem: id,
                quantity: 1,
                price: price,
            });
            console.log(response.data);
            setConfirm(true);

        } catch(e) {
            console.error(e);
        }
    }


    const {isbn, title, subtitle, authors, genre, price} = data;
    return (
        <>
            <main>
                <div className="book-page-inner-container">
                    <form onSubmit={confirmBuyBook}>

                    {loading && <p>Loading...</p>}
                    {error && <p></p>}

                <Boek
                    className="book-item"
                    id={id}
                    isbn={isbn}
                    title={title}
                    subtitle={subtitle}
                    authors={authors}
                    genre={genre}
                    price={price}
                />
            {/*<br/>*/}
            {/*<br/>*/}

            {/*            <form className="form-container-payment">*/}
            {/*                /!*<h1 className="form-title">Payment</h1>*!/*/}
            {/*                <br/>*/}
            {/*                <label htmlFor="pay-type-selection">*/}
            {/*                    <h4>Select Payment:</h4>*/}
            {/*                    <select*/}
            {/*                        id="pay-type-choice"*/}
            {/*                        name="pay-type-choice-field"*/}
            {/*                        value={paytype}*/}
            {/*                        onChange={(e) => setSelectedPay(e.target.value)}*/}
            {/*                    >*/}
            {/*                        <option value="IDeal">*/}
            {/*                            IDeal*/}
            {/*                        </option>*/}
            {/*                        <option value="PayPal">*/}
            {/*                            PayPal*/}
            {/*                        </option>*/}
            {/*                        <option value="Klarna">*/}
            {/*                            Klarna*/}
            {/*                        </option>*/}
            {/*                        <option value="Visa">*/}
            {/*                            Visa*/}
            {/*                        </option>*/}
            {/*                    </select>*/}
            {/*                </label>*/}
            {/*                <br/>*/}
            {/*                <Button*/}
            {/*                    className="confirm-payment-button"*/}
            {/*                    type="submit"*/}
            {/*                    onClick={confirmPayment}*/}
            {/*                >Confirm Payment*/}
            {/*                    {confirm === true && <p>Check your mailbox!</p>}*/}
            {/*                </Button>*/}
            {/*            </form>*/}


            <div className="order-book-handling">
                <Button
                className="buy-book-button"
                type="submit"
                onClick={confirmBuyBook}
            >Bestel
                {confirm === true && <p>Besteld!</p>}
            </Button>
                </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default BestelBoek;




