import React from 'react';
import RecipeItem from './recipe-item/RecipeItem';

export default (props) => {
  const recipes = props.recipes.map((recipe, index) => {
    return <RecipeItem recipeName={recipe.name}
                recipeThumbnail={recipe.image}
                recipeUrl="#"
                key={index} />
  });

  return (
    <div className="list-group">
      {recipes}
    </div>
  )
}
