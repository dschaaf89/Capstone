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

}

RecipeForm.propTypes = {
  onRecipeCreation: PropTypes.func
};

export default RecipeForm;
