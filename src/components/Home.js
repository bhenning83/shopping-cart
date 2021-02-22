import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='home'>
      <h1 className='banner'>Taste the Mediocrity</h1>
      <Link to='./shop'>
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;