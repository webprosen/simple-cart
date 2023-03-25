import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    
    const addToCart = (id) => {
        console.log('Item added', id);
    }

    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>Only for: ${price}</p>
            <button className='add-to-cart' onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;