import { FETCH_SANDWICH_RECEIVED } from './actions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SANDWICH_RECEIVED:
      return {
        ...state, ...action.payload
      };
    default:
      return state;
  }
};
