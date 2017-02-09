import React from 'react';

export default (props) => {
  return (
    <a className="list-group-item clearfix" href={props.recipeUrl}>
      <img className="pull-right img-responsive" src={props.recipeThumbnail} />
      <h4 className="list-group-item-heading">{props.recipeName}</h4>
    </a>
  )
};
