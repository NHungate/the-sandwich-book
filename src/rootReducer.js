import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import recipesListReducer from './home/reducer';
import recipeDetailsReducer from './recipe-details/reducer';

const rootReducer = combineReducers({
  recipes: recipesListReducer,
  selectedSandwich: recipeDetailsReducer,
  routing: routerReducer
});

export default rootReducer;
