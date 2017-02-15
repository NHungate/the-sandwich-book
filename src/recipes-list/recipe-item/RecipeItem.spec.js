import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router';

function setup() {
  const props = {
    recipeId: 0,
    recipeThumbnail: '',
    recipeName: 'Name',
  };

  const wrapper = shallow(<RecipeItem {...props} />);

  return { props, wrapper };
}

it('renders without crashing', () => {
  setup();
});

it('displays a <Link>', () => {
  const { wrapper } = setup();

  expect(wrapper.find(Link)).toHaveLength(1);
});
