import React from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";


function Service({img, link, children, servicesTitle, servicesDescription} ) {

    return (

        <div className="grid-service-tile">
            <Link to={link}>

                <img className="service-tile__icon"
                            src={img}
                            alt="icon"
                />

                <Button
                    className="select-button"
                    type="submit"
                    children={children}
                />

            </Link>
        </div>

    );
}

export default Service;