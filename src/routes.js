import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './home/Home';
import RecipeDetails from './recipe-details/RecipeDetails';
import Admin from './admin/Admin';
import GenericNotFound from './GenericNotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="sandwich/:id" component={RecipeDetails} />
    <Route path="admin/login" component={Admin}>
    </Route>
    <Route path='*' component={GenericNotFound} />
  </Route>
)
