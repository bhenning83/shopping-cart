import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from './ItemsContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  library.add(faShoppingCart)

  return (
    <nav>
      <h1>Brandon's Beans Roastery</h1>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
        <Link to='/cart'>
          <li><FontAwesomeIcon icon={'shopping-cart'} /> {cartItems.length}</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav