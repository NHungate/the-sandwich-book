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
        return (
          <li key={index}>
            <p key={index}>{instruction.trim()}</p>
          </li>
        )
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
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="title">{this.props.selectedSandwich.name}</h2>
              <hr />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <figure className="image is-4by3">
                <img src={this.props.selectedSandwich.image.full} alt={`${this.props.selectedSandwich.name}`} />
              </figure>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box">
                <div className="media">
                  <div className="media-content">
                    <p>Added by: <span>Nathan Hungate</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="box">
                <h3 className="title">Ingredients</h3>
                <hr />
                <ul>
                  {ingredients}
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="title">Instructions</h3>
                <hr />
                <ol>
                  {this.renderInstructions()}
                </ol>
              </div>
            </div>
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
