import React from 'react';

function LogoBig({img, imgTitle, onClick}) {

    return (

        <span className="image-wrapper-big">
        <img src={img}
             alt={imgTitle}
             onClick={onClick}
        />
        </span>
    );
}

export default LogoBig;