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
    <div className="container">
      <div className="columns">
        {recipeItems}
      </div>
    </div>
  );
}

RecipesList.propTypes = {
  recipes: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    ingredients: React.PropTypes.array,
    instructions: React.PropTypes.string,
    name: React.PropTypes.string
  }))
}

export default RecipesList;
