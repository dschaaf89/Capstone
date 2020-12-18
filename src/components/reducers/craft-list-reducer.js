import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, ingredients, steps,description, id} = action;
  switch (action.type) {
  case c.ADD_CRAFT:
    return Object.assign({}, state, {
      [id]: {
        name:name,
        materials:ingredients,
        steps:steps,
        description:description,
        id:id
      }
    });
  case c.DELETE_CRAFT:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};