import React, { useContext } from 'react';
import { ItemsContext } from './ItemsContext'


function Cart({ match }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  console.log(cartItems)
  return (
    <div>henlo, am cart</div>
  )
}

export default Cart