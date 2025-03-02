import React from 'react';
import './Activity.css'

function Activity({className, id, name, img, day, date, time, location, price, availableplaces}) {

    return (
        <>
            <article className={className}>
                {/*<h1>ID {id}</h1>*/}
                <h2 className="box-title">{name}</h2>
                <br/>
                <img className="box-image" src={img} alt={name}/>
                <br/>
                <h3>{day}</h3>
                <h3>{date}</h3>
                <h3>{time}</h3>
                <br/>
                <h3>Locatie: {location}</h3>
                <br/>
                <span className="box-price">€{price}</span>
                <br/>
                <h3>Nog beschikbaar: {availableplaces} plekken</h3>

            </article>
        </>
);
}

export default Activity;
