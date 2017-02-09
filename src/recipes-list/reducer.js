const initialState = [{
    name: 'Grilled Cheese with a Raspberry Twist',
    image: 'http://www.placehold.it/500/500',
    thumbnail: 'http://www.placehold.it/100/100',
    instructions: `Courtesy of The Art of Manliness.
      Chop the green onions.
      Butter the bread.
      Layer the munster cheese on the non-buttered side of one of your bread slices.
      Spread Raspberry Preserves on the non-buttered side of the other slice of bread.
      Add Chopped Pecans and Green Onion onto the Raspberry Preserves.
      Assemble and grill the sandwich.`,
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
