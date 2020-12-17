import React from "react";
import ReusableCraftForm from "./ReusableCraftForm";
import PropTypes from "prop-types";
import {useFirestore} from 'react-redux-firebase'

function EditCraftForm (props) {
  const firestore = useFirestore();
  const { recipe } = props;


  function handleEditCraftFormSubmission(event) {
    event.preventDefault();
    props.onEditCraft();
    const propertiesToUpdate = {
      name: event.target.name.value,
      materials: event.target.materials.value,
      steps: event.target.steps.value,
      description:event.target.description.value,
    }
    return firestore.update({collection: 'crafts', doc: recipe.id }, propertiesToUpdate)
  }
  console.log("here in the form",props)
  return (
    <React.Fragment>
      <ReusableCraftForm 
        name={props.craft.name}
        materials={props.craft.materials}
        steps={props.craft.steps}
        description={props.craft.description}
        formSubmissionHandler={handleEditCraftFormSubmission}
        buttonText="Update Craft" />
    </React.Fragment>
  );
}

EditCraftForm.propTypes = {
  onEditCraft: PropTypes.func
};

export default EditCraftForm;