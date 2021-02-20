import React, { useContext, useEffect } from 'react';
import {ItemsContext} from './ItemsContext'
import {Link} from 'react-router-dom'
import bag from '../assets/images/bag.jpeg'
import items from './items'

function Shop() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  useEffect(() => {
    // console.log(cartItems)
  })
  
  return (
    items.map((item) => {
      return <Link key={item.key} to={`/shop/${item.key}`} >
        <img src={bag} alt=""/>
        <h2>{item.title}</h2>
      </Link>
    })
  )
}

export default Shop;