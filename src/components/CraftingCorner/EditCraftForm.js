import React from "react";
import ReusableCraftForm from "./ReusableCraftForm";
import PropTypes from "prop-types";
import {useFirestore} from 'react-redux-firebase'

function EditCraftForm (props) {
  const firestore = useFirestore();
  const { craft } = props;


  function handleEditCraftFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.materials)
    props.onEditCraft();
    const propertiesToUpdate = {
      name: event.target.name.value,
      materials: event.target.materials.value,
      steps: event.target.steps.value,
      description:event.target.description.value
    }
    console.log(propertiesToUpdate);
    return firestore.update({collection: 'crafts', doc: craft.id }, propertiesToUpdate)
  }
  console.log("here in the form",props)
  return (
    <React.Fragment>
      <div className="card1">
      <ReusableCraftForm 
        name={props.craft.name}
        materials={props.craft.materials}
        steps={props.craft.steps}
        description={props.craft.description}
        url={props.craft.url}
        formSubmissionHandler={handleEditCraftFormSubmission}
        buttonText="Update Craft" />
        </div>
    </React.Fragment>
  );
}

EditCraftForm.propTypes = {
  onEditCraft: PropTypes.func
};

export default EditCraftForm;