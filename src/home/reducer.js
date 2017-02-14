import { FETCH_SANDWICHES_RECEIVED } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SANDWICHES_RECEIVED:
      return [
        ...action.payload
      ]
    default:
      return state;
  }
}
