import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './home/Home';
import RecipeDetails from './recipe-details/RecipeDetails';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="sandwich/:id" component={RecipeDetails} />
    </Route>
  )
};