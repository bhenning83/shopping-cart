import React, { useContext, useEffect } from 'react';
import {ItemsContext} from './ItemsContext'
import {Link} from 'react-router-dom'
import bag from '../assets/images/bag.jpeg'
import items from './items'

function Shop() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  return (
    <div className='shop-wrap'>
      {items.map((item) => {
        return (
          <div className='shop-display' key={item.key}>
            <Link to={`/shop/${item.key}`}>
              <img src={bag} alt=""/>
              <div>
                <h2>{item.title}</h2>
                <h3>{item.origin}</h3>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Shop;