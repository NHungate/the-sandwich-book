import { combineReducers } from 'redux';
import recipesReducer from './recipes/reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer
});

export default rootReducer;
