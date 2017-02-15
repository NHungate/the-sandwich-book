import React from 'react';
import { shallow } from 'enzyme';
import RecipesList from './RecipesList';
import RecipeItem from './recipe-item/RecipeItem';

function setup(props) {
  const newProps = props || [{
    id: 1,
    image: {},
    ingredients: [],
    instructions: '',
    name: '',
  }];

  const wrapper = shallow(<RecipesList {...newProps} />);

  return { wrapper, newProps };
}

it('renders without crashing', () => {
  setup();
});

it('should display a loading <p> when not provided recipes', () => {
  const { wrapper } = setup();

  expect(wrapper.find('p')).toHaveLength(1);
});

it('should display two <RecipeItem />s when provided with recipes', () => {
  const props = {
    recipes: [{
      id: 0,
      image: { thumbnail: '' },
      name: ''
    },
      {
        id: 1,
        image: { thumbnail: '' },
        name: ''
      }
    ]
  };

  const { wrapper } = setup(props);
  expect(wrapper.find(RecipeItem)).toHaveLength(2);
});

