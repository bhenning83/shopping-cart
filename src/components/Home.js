import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='home'>
      <h1 className='banner'>Taste the Mediocrity</h1>
      <Link to='./shop'>
        <button>Shop Now</button>
      </Link>
      <div className='bio'>
        Since the days of the railroad, Lincoln, Nebraska has been known for its average coffee. We are here to continue this proud tradition. Every batch of Brandon's Beans is lovingly roasted by our fully automated process using the most economical beans money can buy.<br /><br /> We are Brandon's Beans, and we are here to whelm you. 
      </div> 
      <div className='home-back'></div>
    </div>
  );
};

export default Home;