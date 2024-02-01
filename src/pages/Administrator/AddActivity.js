import React, {useState} from 'react';
import axios from "axios";
import Button from "../../components/Button/Button";


function AddActivity() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [day, setDay] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [availableplaces, setAvailableplaces] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [errormessage, setErrorMessage] = useState(null)
    const token = localStorage.getItem('token');


    async function addActivity(e) {
        e.preventDefault()
        setErrorMessage(null)
        let pattern = /^\d{4}-\d{2}-\d{2}$/;
        let isMatch = pattern.test(date);
        if (!isMatch) {
            setErrorMessage("DE INVOER IS NIET CORRECT. (yyyy-mm-dd)")
            return false;
        }

        try{
            const response = await axios.post(`http://localhost:8080/activities`, {
                    // id: id,
                    name: name,
                    day: day,
                    date: date,
                    time: time,
                    location: location,
                    price: price,
                    availableplaces: availableplaces,
            },

                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
            setConfirm(true);
            console.log(response.data);

        } catch (e) {
            console.error(e)
        }
    }


    return (
        <>
            <main>
                <div className="form-container">
                    <form onSubmit={addActivity}>
                        <h1 className="form-title">Activiteit toevoegen</h1>
                        {/*<br/>*/}
                        {/*<input*/}
                        {/*    type="id"*/}
                        {/*    id="id-field"*/}
                        {/*    value={id}*/}
                        {/*    onChange={(e) => setId(e.target.value)}*/}
                        {/*    name="id"*/}
                        {/*    placeholder="id"/>*/}
                        <br/>
                        <input
                            type="text"
                            id="name-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            placeholder="naam activiteit"/>
                        <br/>
                        <input
                            type="text"
                            id="day-field"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            name="day"
                            placeholder="dag"/>
                        <br/>
                        <div>{errormessage}</div>
                        <input
                            type="date"
                            id="date-field"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            name="date"
                            placeholder="datum (yyyy-mm-dd)"/>
                        <br/>
                        <input
                            type="time"
                            id="time-field"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            name="time"
                            placeholder="tijdstip"/>
                        <br/>
                        <input
                            type="text"
                            id="location-field"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            name="location"
                            placeholder="locatie"/>
                        <br/>
                        <input
                            type="price"
                            id="price-field"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            name="price"
                            placeholder="prijs"/>
                        <br/>
                        <input
                            type="text"
                            id="available-places-field"
                            value={availableplaces}
                            onChange={(e) => setAvailableplaces(e.target.value)}
                            name="available-places"
                            placeholder="Aantal beschikbare plekken"/>
                        <br/>

                    </form>

                    <Button
                        type="submit"
                        onClick={addActivity}
                    >Toevoegen
                    {confirm === true && <p>Activiteit toegevoegd!</p>}
                </Button>

            </div>
            </main>
        </>
    );
}

export default AddActivity;
