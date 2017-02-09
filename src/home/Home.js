import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipesList from '../recipes-list/RecipesList';

class Home extends Component {
  render() {
    return (
      <RecipesList recipes={this.props.recipes} />
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(Home);
