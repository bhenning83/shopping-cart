import React, { useContext, useEffect } from 'react';
import { useState, ItemsContext } from './ItemsContext'


function Cart({ match }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  const getTotal = (item) => {
    let price = Number(item.product.price.substring(1))
    return price * item.quantity
  }

  const removeItem = (idx) => {
    let newCart = [...cartItems]
    newCart.splice(idx, 1)
    setCartItems(newCart)
  }
  return (
   cartItems.map((item, idx) => {
     return (
       <div key={idx}>
         <h2>{item.product.title}</h2>
         <h4>{item.product.price} x {item.quantity}</h4>
         <h4>Total: ${getTotal(item)}</h4>
         <button onClick={() => removeItem(idx)}>X</button>
       </div>
     )
   })
  )
}

export default Cart

