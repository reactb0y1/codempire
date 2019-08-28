import React from 'react';
import Menu from './Menu/Menu'
import Edit from './Menu/Edit/Edit'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path='/' component={Menu}/>
        <Route path='/edit' component={Edit}/>
        {/*<Route path='order' component={Order}/>*/}
      </Switch>
  );
}

export default App;
