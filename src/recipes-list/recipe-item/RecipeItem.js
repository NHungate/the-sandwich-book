import React from 'react';
import { Link } from 'react-router';

const RecipeItem = (props) => {
  return (
    <Link className="list-group-item clearfix" to={`sandwich/${props.recipeId}`}>
      <img className="pull-right img-responsive" src={props.recipeThumbnail} alt={`${props.recipeName}`} />
      <h4 className="list-group-item-heading">{props.recipeName}</h4>
    </Link>
  )
};

RecipeItem.propTypes = {
  recipeId: React.PropTypes.number.isRequired,
  recipeName: React.PropTypes.string.isRequired,
  recipeThumbnail: React.PropTypes.string.isRequired
};

export default RecipeItem;
