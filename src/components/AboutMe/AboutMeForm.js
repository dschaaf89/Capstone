import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function BioForm(props){
  const firestore = useFirestore();
  const {bio} = props;
  useFirestoreConnect([
    { collection: 'aboutMe' }
  ]); 
   const b = useSelector(state => state.firestore.ordered.aboutMe);
  console.log(b)
  function handleEditAboutMeFormSubmission(event){
    console.log(event)
    
    event.preventDefault();
    props.onEditAbout();
    const propsToUpdate =
      {
        name:event.target.name.value,
        about:event.target.about.value
      };
      console.log(b.id)
    return firestore.update({collection: 'bio', doc:event.target.id.value}, propsToUpdate) 
  }
  
  
  return (
    <React.Fragment>
      <form onSubmit = {handleEditBioFormSubmission}>
        <input
          type='text'
          name='name'
          defaultValue= {b[0].name} />
        <input
          type='text'
          name='github'
          defaultValue= {b[0].github} />

        <input
          name='linkedin'
          defaultValue= {b[0].linkedin} />

          <input
          type='text'
          name='email'
          defaultValue= {b[0].email} />
          <input
          type='text'
          hidden
          name='id'
          defaultValue= {b[0].id} />

          <textarea
          type='text'
          name='about'
          defaultValue= {b[0].about} />

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
BioForm.propTypes = {
  onBioCreation: PropTypes.func
}
export default BioForm;