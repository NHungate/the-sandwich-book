import React from 'react';
import RecipeItem from './recipe-item/RecipeItem';

const RecipesList = (props) => {
  const recipes = props.recipes;

  if (!recipes) {
    return <p>Loading...</p>
  }

  const recipeItems = props.recipes.map((recipe, index) => {
    return <RecipeItem
      recipeName={recipe.name}
      recipeThumbnail={recipe.image.thumbnail}
      recipeId={recipe.id}
      key={index}
    />
  });

  return (
    <div className="list-group">{recipeItems}</div>
  );
}

export default RecipesList;
