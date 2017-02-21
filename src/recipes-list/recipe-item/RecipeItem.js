import React from 'react';
import { Link } from 'react-router';

const RecipeItem = (props) => {
  return (
    <div className="column is-one-third">
      <Link to={`sandwich/${props.recipeId}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={props.recipeThumbnail} alt={`${props.recipeName}`} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{props.recipeName}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
};

RecipeItem.propTypes = {
  recipeId: React.PropTypes.number.isRequired,
  recipeName: React.PropTypes.string.isRequired,
  recipeThumbnail: React.PropTypes.string.isRequired
};

export default RecipeItem;
