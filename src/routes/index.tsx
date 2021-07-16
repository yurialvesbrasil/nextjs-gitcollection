/* eslint-disable prettier/prettier */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dasboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dasboard} path="/" exact />
      <Route component={Repo} path="/repositories" />
    </Switch>
  );
};
