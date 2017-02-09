const initialState = [{
    name: 'Raspberry Sandwich',
    image: 'http://www.placehold.it/500/500',
    thumbnail: 'http://www.placehold.it/100/100',
    instructions: 'Do this\n\n\nAnd this',
    ingredients: [
      'Sourdough Bread',
      'Munster Cheese, 4 Slices',
      'Pecans, Chopped',
      'Green Onions',
      'Raspberry Preserves',
      'Butter'
    ],
    id: 0
}];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
