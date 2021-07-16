import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dasboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';

/* O + na segunda rota é para identificar que vão existir mais
   barras mas deve ser considerado um unico parâmetro */
export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dasboard} path="/" exact />
      <Route component={Repo} path="/repositories/:full_name+" />
    </Switch>
  );
};
