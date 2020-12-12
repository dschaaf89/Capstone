import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'


function RecipeForm(props){
  const firestore = useFirestore();

  function addRecipeToFirestore(event) {
    event.preventDefault();
    props.onRecipeCreation();
    return firestore.collection('Recipe').add(
    {
      name: event.target.name.value,
      description:event.target.description.value,
      ingredients:event.target.ingredients.value,
      steps:event.target.steps.value
    });
  }
  return (
    <React.Fragment>
      <form onSubmit = {addRecipeToFirestore}>
        <input
          type='text'
          name='recipeName'
          placeholder='recipeName' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type='text'
          name='ingredient'
          placeholder='ingredient.' />
          <textarea
          type='text'
          name='description'
          placeholder='Description' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
  

}

RecipeForm.propTypes = {
  onRecipeCreation: PropTypes.func
};

export default RecipeForm;
