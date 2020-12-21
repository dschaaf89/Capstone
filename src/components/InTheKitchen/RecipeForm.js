import React from "react";
import PropTypes from "prop-types";

import { useFirestore } from 'react-redux-firebase'
import ReusableForm from "./ReusableForm";



function RecipeForm(props){
  const firestore = useFirestore();

  function addRecipeToFireStore(event){
    event.preventDefault();
   
    console.log(event.target.getElementsByClassName("ingredients"))
    const ingredients =[];
    const steps = [];
    const stepList = event.target.getElementsByClassName("steps")
    const ingredientList = event.target.getElementsByClassName("ingredients")
    console.log("ingredients",ingredientList.length)
    console.log("steps",stepList.length)
    for(let i = 0 ; i < ingredientList.length ; i++ )
    {
      console.log("ingredients list",ingredientList[i].value)
      ingredients.push(ingredientList[i].value);
    }
    for(let i=0; i < stepList.length;i++){
      console.log("step list",stepList[i].value)
      steps.push(stepList[i].value);

    }
    
     console.log(ingredients); 
    
   
    //this.props.onSurveyCreation();
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
