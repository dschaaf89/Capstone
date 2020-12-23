import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import {useFirestore} from 'react-redux-firebase'

function EditTravelForm (props) {
  const firestore = useFirestore();
  const { travel } = props;


  function handleEditRecipeFormSubmission(event) {
    event.preventDefault();
    props.onEditRecipe();
    const propertiesToUpdate = {
      name: event.target.name.value,
      blog:event.target.blog.value,
      url:event.target.url.value
    }
    return firestore.update({collection: 'travel', doc: travel.id }, propertiesToUpdate)
  }
  console.log("here in the form",props)
  return (
    <React.Fragment>
      <ReusableForm 
        name={props.travel.name}
        blog={props.travel.blog}
        url={props.travel.url}
        formSubmissionHandler={handleEditRecipeFormSubmission}
        buttonText="Update Recipe" />
    </React.Fragment>
  );
}

EditTravelForm.propTypes = {
  onEditTravel: PropTypes.func
};

export default EditTravelForm;