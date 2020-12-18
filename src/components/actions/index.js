
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
export const addCraft = (craft) => {
  const { names, materials, steps, description, id } = craft;
  return {
    type: c.ADD_CRAFT,
    names: names,
    materials: materials,
    steps: steps,
    description:description,
    id: id
  }
}

export const deleteCraft = id => ({
  type: c.DELETE_CRAFT,
  id
});