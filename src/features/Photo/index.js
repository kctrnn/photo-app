import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import MainPage from './pages/MainPage';

const Photo = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={MainPage} />

      <Route path={`${match.path}/add`} component={AddEditPage} />
      <Route path={`${match.path}/:photoId`} component={AddEditPage} />
    </Switch>
  );
};

export default Photo;
