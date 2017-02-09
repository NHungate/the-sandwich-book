import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import recipesListReducer from './recipes-list/reducer';

const rootReducer = combineReducers({
  recipes: recipesListReducer,
  routing: routerReducer
});

export default rootReducer;
