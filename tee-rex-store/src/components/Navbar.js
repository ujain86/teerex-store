import React from 'react';

function Navbar(props) {
  return (
    <div id='navbar'>
        <h1 onClick={() => props.setFlag(true)} style={{cursor: 'pointer'}}>TeeRex</h1>
        <div onClick={() => props.setFlag(false)} style={{cursor: 'pointer'}} id='cartIconContainer'>
          <img id='cartIcon' src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="cart-icon" />
          <span id='cartCount'> {props.cartItems.length} </span>
      </div>
    </div>
  )
}


export default Navbar;