import React from 'react';
import './Button.css'

function Button({className, type, onClick, disabled, children}) {

    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
