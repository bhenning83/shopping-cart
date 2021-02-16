import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from './ItemsContext'

function Nav() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  return (
    <nav>
      <ul>
        <Link to='./home'>
          <li>Home</li>
        </Link>
        <Link to='./shop'>
          <li>Shop</li>
        </Link>
        <Link to='./cart'>
          <li>Cart {cartItems.length}</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav