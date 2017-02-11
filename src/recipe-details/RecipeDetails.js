import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    const id = props.params.id;
    this.selectedRecipe = props.recipes[id];
  }

  renderInstructions(instructionsText) {
    const instructions = instructionsText.replace(/\n\s*\n/g, '\n').split('\n').map((instruction, index) => {
      if (instruction && instruction.trim()) {
        return <p key={index}>{instruction.trim()}</p>
      }
      return null;
    });

    return instructions;
  }

  render() {
    if (!this.selectedRecipe) {
      return <div></div>
    }

    const ingredients = this.selectedRecipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });

    const instructions = this.renderInstructions(this.selectedRecipe.instructions);

    return (
      <section>
        <div className="row">
          <div className="col-sm-4 col-sm-push-8">
            <img className="img-responsive" src={this.selectedRecipe.image} alt={`${this.selectedRecipe.name}`} />
          </div>
          <div className="col-sm-8 col-sm-pull-4">
            <h2>{this.selectedRecipe.name}</h2>
            <hr />
            <h3>Ingredients</h3>
            <ul>
              {ingredients}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h3>Instructions</h3>
            {instructions}
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(RecipeDetails);
