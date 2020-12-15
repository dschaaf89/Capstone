import formVisibleReducer from './form-visable-reducer';
import RecipeListReducer from './recipe-list-reducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterRecipeList: RecipeListReducer,
  firestore:firestoreReducer
});

export default rootReducer;