import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import {useFirestore} from 'react-redux-firebase'

function EditRecipeForm (props) {
  const firestore = useFirestore();
  const { recipe } = props;


  function handleEditRecipeFormSubmission(event) {
    event.preventDefault();
    props.onEditRecipe();
    const propertiesToUpdate = {
      name: event.target.name.value,
      ingredients: event.target.ingredients.value,
      steps: event.target.steps.value,
      description:event.target.description.value,
      foodType:event.target.foodType.value,
      url:event.target.url.value
    }
    return firestore.update({collection: 'recipes', doc: recipe.id }, propertiesToUpdate)
  }
  console.log("here in the form",props)
  return (
    <React.Fragment>
      <ReusableForm 
        name={props.recipe.name}
        ingredients={props.recipe.ingredients}
        steps={props.recipe.steps}
        description={props.recipe.description}
        foodType={props.recipe.foodType}
        url={props.recipe.url}
        formSubmissionHandler={handleEditRecipeFormSubmission}
        buttonText="Update Recipe" />
    </React.Fragment>
  );
}

EditRecipeForm.propTypes = {
  onEditRecipe: PropTypes.func
};

export default EditRecipeForm;