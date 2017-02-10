import React from 'react';
import ReactDOM from 'react-dom';
import RecipeItem from './RecipeItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeItem />, div);
});

