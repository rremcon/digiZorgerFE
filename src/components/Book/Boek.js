import React from 'react';
import './Boek.css'

function Boek({className, id, isbn, title, subtitle, authors, genre, price}) {


    return (
        <>
            <div className={className}>
                <h1>Boek {id}</h1>
                <br/>
                <h2>{isbn}</h2>
                <h2>{title}</h2>
                <h2>{subtitle}</h2>
                <h3>{authors}</h3>
                <p>{genre}</p>
                <br/>
                <br/>
                <span>€{price}</span>
            </div>
        </>
    );
}

export default Boek;


