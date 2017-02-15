import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

export class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.id = props.params.id;
  }

  static propTypes = {
    selectedSandwich: React.PropTypes.shape({
      id: React.PropTypes.number,
      image: React.PropTypes.object,
      ingredients: React.PropTypes.array,
      instructions: React.PropTypes.string,
      name: React.PropTypes.string
    }).isRequired
  }

  componentDidMount() {
    this.props.actions.fetchSandwich(this.id);
  }

  renderInstructions() {
    const instructionsText = this.props.selectedSandwich.instructions;
    if (!instructionsText) { return; }

    const instructions = instructionsText.replace(/\n\s*\n/g, '\n').split('\n').map((instruction, index) => {
      if (instruction && instruction.trim()) {
        return <p key={index}>{instruction.trim()}</p>
      }
      return null;
    });

    return instructions;
  }

  render() {
    if (!this.props.selectedSandwich.name) {
      return <div></div>
    }

    const ingredients = this.props.selectedSandwich.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });

    return (
      <section>
        <div className="row">
          <div className="col-sm-4 col-sm-push-8">
            <img className="img-responsive" src={this.props.selectedSandwich.image.full} alt={`${this.props.selectedSandwich.name}`} />
          </div>
          <div className="col-sm-8 col-sm-pull-4">
            <h2>{this.props.selectedSandwich.name}</h2>
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
            {this.renderInstructions()}
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedSandwich: state.selectedSandwich
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
