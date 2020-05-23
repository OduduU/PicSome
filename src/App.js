import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
