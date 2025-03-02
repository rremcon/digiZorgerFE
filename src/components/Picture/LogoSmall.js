import React from 'react';

function LogoSmall({img, imgTitle, onClick}) {

    return (

        <span className="image-wrapper-small">
        <img src={img}
             alt={imgTitle}
             onClick={onClick}
        />
        </span>
    );
}

export default LogoSmall;