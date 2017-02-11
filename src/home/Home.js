import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RecipesList from '../recipes-list/RecipesList';
import * as Actions from './actions';

export class Home extends Component {
  componentDidMount() {
    this.props.actions.getSandwiches();
  }

  render() {
    return (
      <RecipesList recipes={this.props.recipes} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
