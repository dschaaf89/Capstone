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
    const test2 = event.target.getElementsByClassName("steps")
    const test = event.target.getElementsByClassName("ingredients")
    console.log(test.length)
    for(let i = 0 ; i < test.length ; i++ )
    {
      ingredients.push(test[i].value);
      steps.push(test2[i].value);
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
