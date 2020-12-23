import React from "react";
import PropTypes from "prop-types";

import { useFirestore } from 'react-redux-firebase'
import ReusableForm from "./ReusableForm";



function TravelForm(props){
  const firestore = useFirestore();

  function addTravelToFireStore(event){
    event.preventDefault()
    return firestore.collection('travel').add(
      {
        name:event.target.name.value,
        blog:event.target.blog.value,
        url:event.target.url.value

      }
        
    )
  }

  return (
    <React.Fragment>
      <div className="card">
      <ReusableForm 
        formSubmissionHandler={addTravelToFireStore}
        buttonText="Submit" />
        </div>
    </React.Fragment>
  )
}

TravelForm.propTypes = {
  onTravelCreation: PropTypes.func
}

export default TravelForm;
