import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditRecipeForm (props) {
  const { recipe } = props;

  function handleEditRecipeFormSubmission(event) {
    event.preventDefault();
    props.onEditRecipe({
      name: event.target.name.value,
      ingredients:event.target.ingredients.value,
      steps:event.target.steps.value,
      description:event.target.description.value,
      id:props.id
    });
    console.log(event)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        name={props.recipe.name}
        ingredients={props.recipe.ingredients}
        steps={props.recipe.steps}
        description={props.recipe.description}
        formSubmissionHandler={handleEditRecipeFormSubmission}
        buttonText="Update Recipe" />
    </React.Fragment>
  );
}

EditRecipeForm.propTypes = {
  onEditRecipe: PropTypes.func
};

export default EditRecipeForm;