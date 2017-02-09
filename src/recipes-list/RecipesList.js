import React from 'react';
import RecipeItem from './recipe-item/RecipeItem';

const RecipesList = (props) => {
  const recipes = props.recipes;

  if (!recipes) {
    return <p>Loading...</p>
  }

  const recipeItems = props.recipes.map((recipe) => {
    return <RecipeItem
      recipeName={recipe.name}
      recipeThumbnail={recipe.thumbnail}
      recipeId={recipe.id}
      key={recipe.id}
    />
  });

  return (
    <div className="list-group">{recipeItems}</div>
  );
}

export default RecipesList;
