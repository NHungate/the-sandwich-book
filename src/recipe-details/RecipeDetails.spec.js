import React from 'react';
import { RecipeDetails } from './RecipeDetails';
import { shallow } from 'enzyme';

function setup() {
  const initialState = {
    name: 'Name',
    ingredients: ['4 Slices of cheese'],
    instructions: 'Hello\n\n\nWorld',
    image: {

    }
  };

  const props = {
    params: { id: 0 },
    selectedSandwich: initialState
  };

  const enzymeWrapper = shallow(
    <RecipeDetails {...props} />
  );

  return {
    props,
    enzymeWrapper
  }
}

it('renders without crashing', () => {
  setup();
});

it('should render <section>', () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find('section')).toHaveLength(1);
});

it('should return two <p>', () => {
  const { enzymeWrapper } = setup();
  const instructionsElements = enzymeWrapper.instance().renderInstructions('Hello\n\n\n\nWorld');
  expect(instructionsElements).toHaveLength(2);
});
