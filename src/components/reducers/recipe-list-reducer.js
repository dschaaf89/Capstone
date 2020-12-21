import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, ingredients, steps,description, id} = action;
  switch (action.type) {
  case c.ADD_RECIPE:
    return Object.assign({}, state, {
      [id]: {
        name:name,
        ingredients:ingredients,
        steps:steps,
        description:description,
        type:type,
        Url:Url,
        id:id
      }
    });
  case c.DELETE_RECIPE:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};