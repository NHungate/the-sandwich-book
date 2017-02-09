import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Recipes from '../recipes/Recipes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Recipes recipes={this.props.recipes} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(App);
