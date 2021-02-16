import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Honey I'm home</h1>
      <Link to='./shop'>
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;