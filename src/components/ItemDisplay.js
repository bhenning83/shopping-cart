import React, { useState, useContext } from 'react';
import items from './items';
import bag from '../assets/images/bag.jpeg';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ItemsContext } from './ItemsContext'


function ItemDisplay({ match }) {
  const [quant, setQuant] = useState(1);
  const [cartItems, setCartItems] = useContext(ItemsContext);

  const idx = match.params.id;
  const item = items.slice((idx, 1))[0];

  library.add(faTimes)

  const handleChange = (e) => {
    setQuant(e.target.value)
  }

  const handleSubmit = () => {
    setCartItems(cartItems.concat({
      product: item,
      quantity: quant,
    }))
    setQuant(1)
  }

  return (
    <div className='product-field'>
      <Link to={'/shop'}>
        <FontAwesomeIcon icon={'times'} size='lg' />
      </Link>
      <h1>{item.title}</h1>
      <div className='product-deets'>
        <img src={bag} alt="coffee bag"/>
        <div className='info-box'>
          <h5>{item.desc}</h5>
          <h5>{item.roast}</h5>
          <h5>Origin: {item.origin}</h5>
          <input type="number" 
          placeholder='1'
          min='1'
          onChange={handleChange} />
          <Link to={'/shop'}>
            <button onClick={handleSubmit}>Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDisplay
