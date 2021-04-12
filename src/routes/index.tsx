import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import EditSupplier from '../pages/EditSupplier';

import Route from './Route';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/Dashboard" isPrivate component={Dashboard} />
      <Route path="/EditSupplier/:id" isPrivate component={EditSupplier} />
    </Switch>
  </HashRouter>
);

export default Routes;
