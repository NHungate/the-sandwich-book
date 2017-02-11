import React from 'react';
import { shallow } from 'enzyme';
import RecipesList from './RecipesList';
import RecipeItem from './recipe-item/RecipeItem';

it('renders without crashing', () => {
  shallow(<RecipesList />);
});

it('should display a loading <p> when not provided recipes', () => {
  const wrapper = shallow(<RecipesList />);
  expect(wrapper.find('p')).toHaveLength(1);
});

it('should display two <RecipeItem />s when provided with recipes', () => {
  const props = {
    recipes: [{id: 0}, {id: 1}]
  };

  const wrapper = shallow(<RecipesList {...props} />);
  expect(wrapper.find(RecipeItem)).toHaveLength(2);
});

