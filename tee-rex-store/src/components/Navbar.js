import React from 'react';
import Cart from './Cart';

function Navbar(props) {
  return (
    <div style={styles.nav}>
        <h1>TeeRex</h1>
        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="cart-icon" />
          <span style={styles.cartCount}> {props.cartCount} </span>
      </div>
    </div>
  )
}

const styles = {
    cartIcon: {
      height: 32,
      width:40,
      marginRight: 30
    },
    nav: {
      height: 70,
      width: 2500,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '2px 4px',
      position: 'absolute',
      right: 25,
      top: -5
    }
  };

export default Navbar;