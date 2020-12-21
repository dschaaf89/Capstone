import React from "react";
import PropTypes from "prop-types";

import { useFirestore } from 'react-redux-firebase'
import ReusableForm from "./ReusableForm";



function RecipeForm(props){
  const firestore = useFirestore();

  function addRecipeToFireStore(event){
    event.preventDefault();
    const ingredients =[];
    const steps = [];
    const stepList = event.target.getElementsByClassName("steps")
    const ingredientList = event.target.getElementsByClassName("ingredients")
    for(let i = 0 ; i < ingredientList.length ; i++ )
    {
      ingredients.push(ingredientList[i].value);
    }
    for(let i=0; i < stepList.length;i++){

      steps.push(stepList[i].value);

    }   
    return firestore.collection('recipes').add(
      {
        name:event.target.name.value,
        ingredients: ingredients,
        steps:steps,
        description:event.target.description.value,
        url:event.target.url.value

      }
        
    )
  }

  return (
    <React.Fragment>
      <div className="card">
      <ReusableForm 
        ingredients= {[]}
        steps= {[]}
        formSubmissionHandler={addRecipeToFireStore}
        buttonText="Submit" />
        </div>
    </React.Fragment>
  )
}

RecipeForm.propTypes = {
  onRecipeCreation: PropTypes.func
}

export default RecipeForm;
