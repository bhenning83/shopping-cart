import React from 'react';
import { useState } from 'react'

function Checkout() {
  const [src, setSrc] = useState('')

  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }

  const h1style = {
    marginBottom: '25px'
  }

  fetch('https://api.giphy.com/v1/gifs/translate?api_key=0rvzBeZcPTKU9FJMPRwEtqpzKYNPr4ZA&s=puppy', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    setSrc(response.data.images.original.url);
  });

  return(
    <div style={style}>
      <h1 style={h1style}>Coming Soon</h1>
      <img src={src} alt=""/>
    </div>
  )
}

export default Checkout