import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router';

it('renders without crashing', () => {
  shallow(<RecipeItem />);
});

it('displays a <Link>', () => {
  const props = {
    recipeId: 0,
    recipeThumbnail: '',
    recipeName: 'Name',
  };

  const wrapper = shallow(<RecipeItem {...props} />);
  expect(wrapper.find(Link)).toHaveLength(1);
});
