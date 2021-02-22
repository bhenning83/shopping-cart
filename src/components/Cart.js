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
  
  const ifEmpty = () => {
    return cartItems.length === 0 ? true : false;
  }

  return (
    <div className='cart-wrap'>
      <div className='cart-box'>
        {ifEmpty() ?
          <h1 className='banner'>YOUR CART IS EMPTY. GET SHOPPIN'.</h1>
          : cartItems.map((item, idx) => {
            return (
              <div key={idx} className='cart-item'>
                <h2>{item.product.title}</h2>
                <h4>{item.product.price} x {item.quantity}</h4>
                <h4>Total: ${getTotal(item)}</h4>
                <button onClick={() => removeItem(idx)}>X</button>
              </div>
            )
          })}
      </div>
      <div className='back-beans'></div>
    </div>
  )
}

export default Cart

