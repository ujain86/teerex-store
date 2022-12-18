import React from 'react';

function Cart(props) {

  const handleDelete = (name) => {
    let newCartItems = props.cartItems;
    newCartItems = newCartItems.filter((item)=> {
      if(item.name != name){
        return item;
      }
    });
    // console.log('clicked');
    // console.log(props.cartItems);
    // console.log('clicked', name);
    
    props.setCartItems(newCartItems);
  }

  let sum = 0;

  console.log('cart: ', props.cartItems)
  return (
    <div>
      {props.cartItems.map((item, index) => {
        {sum += item.price}
        return (
        <div className='product' key={index} >
          <div> <img src={item.imageURL} alt='product-pic'/> </div>
          <div>
            <p> {item.name} </p>
            <p id='price'> Rs {item.price} </p>
            <button onClick={()=>handleDelete(item.name)}>Delete Product</button>
          </div>
        </div>)
      })}
     <h1 style={{fontWeight: 'bold', margin: 15}}> Total Price: {sum} </h1>
    </div>
  )
}

export default Cart