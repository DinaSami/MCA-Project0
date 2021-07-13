import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import Admin from '../admin';
function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/doctors" component={Admin} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default Main;
