import React from 'react';
import './Activity.css'

function Activity({className, id, name, img, day, date, time, location, price, availableplaces}) {

    return (
        <>
            <div className={className}>
                {/*<h1>Activiteit {id}</h1>*/}
                <h2>{name}</h2>
                <img src={img} alt={name}/>
                <br/>
                <h3>{day}</h3>
                <h3>{date}</h3>
                <h3>{time}</h3>
                <br/>
                <h3>Locatie: {location}</h3>
                <br/>
                <span>€{price}</span>
                <br/>
                <br/>
                <h3>Totaal beschikbaar: {availableplaces} plekken</h3>

            </div>
        </>
    );
}

export default Activity;
