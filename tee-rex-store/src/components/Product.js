import React from 'react'

function Product(props) {

    
    const handleAdd = () => {

        // alert('Added');
        const obj = {
            name: props.product.name,
            imageURL: props.product.imageURL,
            price: props.product.price,
            qty: 1
        }

        props.cartItems.filter((item) => {
            if(item.name == obj.name){
                return item.qty++;
            }
            // else {
            //     return item;
            // }
        })
        const newCartItems = props.cartItems;
        newCartItems.push(obj);
        
        props.setCartItems(newCartItems);
        // console.log(props.cartItems);
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