import React, { useContext, useState, useEffect } from 'react';
import { ItemsContext } from './ItemsContext'

function Cart({ match }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  const [checkoutTotal, setCheckoutTotal] = useState(0)

  const getTotal = (item) => {return item.product.price * item.quantity}

  const getCheckoutTotal = () => {
    let totals = []
    cartItems.forEach(item => {
      totals.push(item.quantity * item.product.price)
    })
    if (totals.length > 0) {
      let total = totals.reduce((acc, price) => { 
        return acc + price 
      })
      return total
    }
  }

  useEffect(() => {
    let total = getCheckoutTotal();
    console.log(total)
    setCheckoutTotal(total);
  })

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
          : <div>
              {cartItems.map((item, idx) => {
                return (
                  <div key={idx} className='cart-item'>
                    <h2>{item.product.title}</h2>
                    <h4>Item Price: ${item.product.price}</h4>
                    <h4>Quantity: {item.quantity}</h4>
                    <h4>Sub Total: ${getTotal(item)}</h4>
                    <button onClick={() => removeItem(idx)}>Remove Item</button>
                  </div>
                )
                })}
              <h2 className='grand-total'>Total: ${checkoutTotal}</h2>
            </div>
        }
      </div>
      <div className='back-beans'></div>
      <div className='beans-bl'></div>
    </div>
  )
}

export default Cart

