const initialState = [
  {
  name: 'Raspberry Sandwich',
  image: 'http://www.placehold.it/100/100',
  ingredients: [
    '1-2 Slices of Munster Cheese',
    'Raspberry Preserves',
    'Chopped Pecans',
    '1 Green Onion, Chopped',
    '2 Slices of Sourdough Bread',
    'Butter, Unsalted'
  ]
}];

export default function recipes(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
