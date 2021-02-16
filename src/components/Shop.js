import React, { useContext, useEffect } from 'react';
import {ItemsContext} from './ItemsContext'

function Shop() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  const onClickHandler = () => {
    setCartItems(cartItems.concat('test'))
  }

  useEffect(() => {
    console.log(cartItems)
  })
  
  return (
    <button onClick={onClickHandler}>Testy Test</button>
  )
}

export default Shop;