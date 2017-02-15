import React from 'react';
import { Link } from 'react-router';

const RecipeItem = (props) => {
  return (
    <Link className="list-group-item clearfix" to={`sandwich/${props.recipeId}`}>
      <div className="media">
        <div className="media-body">
          <h4 className="media-heading">{props.recipeName}</h4>
        </div>
        <div className="media-right">
          <img className="media-object" src={props.recipeThumbnail} alt={`${props.recipeName}`} />
        </div>
      </div>
    </Link>
  )
};

RecipeItem.propTypes = {
  recipeId: React.PropTypes.number.isRequired,
  recipeName: React.PropTypes.string.isRequired,
  recipeThumbnail: React.PropTypes.string.isRequired
};

export default RecipeItem;
