import React from "react";
import PropTypes from "prop-types";

import { useFirestore } from 'react-redux-firebase'
import ReusableForm from "./ReusableForm";


function RecipeForm(props){
  const firestore = useFirestore();

  function addRecipeToFirestore(event) {

    console.log(event)
    event.preventDefault();
    props.onRecipeCreation();
    return firestore.collection('recipes').add(
    {
      name: event.target.name.value,
      description:event.target.description.value,
      ingredients:event.target.ingredients.value,
      steps:event.target.steps.value,
      foodType:event.target.type.value,
      Url:event.target.Url.value
    });
  }
  return (
    <React.Fragment>
       
      <ReusableForm 
        formSubmissionHandler={addRecipeToFirestore}
        buttonText="Add" />
    </React.Fragment>
  )
  

}

RecipeForm.propTypes = {
  onRecipeCreation: PropTypes.func
}

export default RecipeForm;
