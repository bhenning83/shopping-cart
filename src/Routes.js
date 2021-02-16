import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { Provider } from './components/ItemsContext'

function Routes() {
  return (
    <Provider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default Routes;