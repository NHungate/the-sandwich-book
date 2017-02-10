import React from 'react';
import { RecipeDetails } from './RecipeDetails';
import { shallow } from 'enzyme';

function setup() {
  const initialState = {
    recipes: [{
      name: 'Name',
      ingredients: [],
      instructions: ''
    }]
  };

  const props = {
    params: { id: 0 },
    recipes: initialState.recipes
  };

  const enzymeWrapper = shallow(
    <RecipeDetails {...props} />
  );

  return {
    props,
    enzymeWrapper
  }
}

describe('<RecipeDetails />', () => {
  it('renders without crashing', () => {
    setup();
  });

  it('should render a `.recipe-details`', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('section').exists()).toBe(true);
  });
});
