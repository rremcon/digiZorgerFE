import React from 'react';

function Activiteit({className, id, name, date, day, time, location, price}) {


    return (
        <>
                <table className={className}>
                    <tbody>
                    <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{date}</td>
                            <td>{day}</td>
                            <td>{time}</td>
                            <td>{location}</td>
                            <td>€{price}</td>
                        </tr>
                    </tbody>
                </table>
        </>
    );
}

export default Activiteit;
