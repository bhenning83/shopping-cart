import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from './ItemsContext'

function Nav() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  return (
    <nav>
      <h1>Brandon's Coffee Roasters</h1>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
        <Link to='/cart'>
          <li>Cart {cartItems.length}</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav