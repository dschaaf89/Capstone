import formVisibleReducer from './form-visable-reducer';
//import RecipeListReducer from './recipe-list-reducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import craftListReducer from './craft-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,

  masterCraftList: craftListReducer,
  firestore:firestoreReducer
});

export default rootReducer;