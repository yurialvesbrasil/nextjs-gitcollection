import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

//Carrega o componente sobre demanda
const Dasboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "dasboard" */ '../pages/Dashboard'
    ),
);
const Repo = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "repo" */ '../pages/Repo'
    ),
);

/* O + na segunda rota é para identificar que vão existir mais
   barras mas deve ser considerado um unico parâmetro */
export const Routes: React.FC = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route component={Dasboard} path="/" exact />
        <Route component={Repo} path="/repositories/:full_name+" />
      </Suspense>
    </Switch>
  );
};
