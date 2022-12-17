import React, { useState } from 'react'

function Product(props) {

    
    const handleAdd = () => {

        // alert('Added');
        const obj = {
            name: props.product.name,
            name: props.product.imageURL,
            name: props.product.price,
        }

        const newCartItems = props.cartItems;
        newCartItems.push(obj);
        
        props.setCartItems(newCartItems);
        props.setCartCount(props.cartCount + 1);
    };

  return (
    <div className='product'>
        <div> <img src={props.product.imageURL} /> </div>
        <div>
            <p> {props.product.name} </p>
            <p id='price'> Rs {props.product.price} </p>
            <button onClick={handleAdd}>Add To Cart</button>
        </div>

        
        
        
    </div>
  )
}

export default Product