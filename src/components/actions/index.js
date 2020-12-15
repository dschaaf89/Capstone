
import * as c from './ActionTypes';

export const deleteRecipe = id => ({
  type: c.DELETE_RECIPE,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addRecipe = (recipe) => {
  const { names, ingredients, steps, description, id } = recipe;
  return {
    type: c.ADD_RECIPE,
    names: names,
    ingredients: ingredients,
    steps: steps,
    description:description,
    id: id
  }
}