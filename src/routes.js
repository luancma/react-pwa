import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CardDetails from './pages/CardDetails';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" exact component={CardDetails} />
    </Switch>
  );
}
