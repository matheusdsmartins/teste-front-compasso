import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './AppRoute';
import { publicRoutes } from './routePaths';
import NotFoundPage from '../pages/404Page';

const Routes = () => {
  const setRoute = (route) => {
    return <Route key={route.path} {...route} exact />;
  };

  const routes = () => {
    return publicRoutes.map(setRoute);
  };

  return (
    <Switch>
      {routes()}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
