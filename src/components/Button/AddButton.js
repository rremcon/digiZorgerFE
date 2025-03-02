import React, {useContext} from "react";
import {ClickContext} from "../../context/ClickContext";

function Addbutton() {

    const {plusOneFunction, clicks} = useContext(ClickContext)

    return (
        <button type="button"
                className="quantity-button"
                onClick={plusOneFunction}
                disabled={clicks === 1}
        >
            +
        </button>
    );
}

export default Addbutton;