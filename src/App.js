import React from 'react';
import Menu from './Menu/Menu'
import Burger from './Burger/Burger'
import Order from './Order/Order'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path='/' component={Menu}/>
        <Route path='/menu/:id' component={Burger}/>
        <Route path='/order' component={Order}/>
      </Switch>
  );
}

export default App;
