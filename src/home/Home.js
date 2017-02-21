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
      <section>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="columns">
              <div className="column">
                <p className="title">Delicious Sandwiches</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <RecipesList recipes={this.props.recipes} />
        </section>
      </section>
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
