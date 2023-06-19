import React from 'react';
import './Product.css'

function Product({className, id, image, title, description, price}) {


    return (
        <>
            <div className={className}>
                {/*<h1>Product {id}</h1>*/}
                <br/>
                <img src={image} alt={title}/>
                <h1>{title}</h1>
                <p>{description}</p>
                <br/>
                <br/>
                <span>€{price}</span>
                <button type="button">Add to card</button>
            </div>
        </>
    );
}

export default Product;
