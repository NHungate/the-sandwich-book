import { FETCH_SANDWICH } from './actions';

const initialState = {
  selectedRecipe: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SANDWICH:
      return {
        ...state, selectedRecipe: action.payload
      };
    default:
      return state;
  }
};
