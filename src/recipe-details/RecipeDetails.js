import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    const id = props.params.id;
    this.selectedRecipe = props.recipes[id];
  }

  render() {
    if (!this.selectedRecipe) {
      return <div></div>
    }

    const ingredients = this.selectedRecipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });

    const instruction = this.selectedRecipe.instructions.replace('/[\r\n]{2,}/g', '\n').split('\n');
    console.log(instruction);

    const instructions = instruction.map((instruction, index) => {
      if (instruction) {
        return <p key={index}>{instruction}</p>
      }
    });

    return (
      <section>
        <div className="row">
          <div className="col-md-8">
            <h2>{this.selectedRecipe.name}</h2>
            <hr />
            <h3>Ingredients</h3>
            <ul>
              {ingredients}
            </ul>
          </div>
          <div className="col-md-4">
            <img className="img-responsive" src={this.selectedRecipe.image} alt={`${this.selectedRecipe.name}`} />
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
