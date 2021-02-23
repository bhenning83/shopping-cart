import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemDisplay from './components/ItemDisplay';
import { Provider } from './components/ItemsContext';

function Routes() {
  return (
    <Provider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shopping-cart' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/shop/:id' component={ItemDisplay} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default Routes;