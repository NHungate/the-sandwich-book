import React from 'react';
import RecipesList from './recipes-list/RecipesList';

export default (props) => {
  return (
    <div className="container-fluid">
      <RecipesList recipes={props.recipes} />
    </div>
  )
}
