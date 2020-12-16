  
import React from 'react';
import PropTypes from 'prop-types'
import { useFirestore } from 'react-redux-firebase'
import ReusableCraftForm from './ReusableCraftForm'


function CraftForm(props){
  const firestore = useFirestore();

  function addCraftToFireStore(event){
    event.preventDefault();
   
    console.log(event.target.getElementsByClassName("materials"))
    const materials =[];
    const steps = [];
    const test2 = event.target.getElementsByClassName("steps")
    const test = event.target.getElementsByClassName("materials")
    console.log(test.length)
    for(let i = 0 ; i < test.length ; i++ )
    {
      materials.push(test[i].value);
      steps.push(test2[i].value);
    }
    
     console.log(materials); 
    
   
    //this.props.onSurveyCreation();
    return firestore.collection('crafts').add(
      {
        name:event.target.name.value,
        materials: materials,
        steps:steps,
        description:event.target.description.value

      }
        
    )
  }

  return (
    <React.Fragment>
      <ReusableCraftForm 
        formSubmissionHandler={addCraftToFireStore}
        buttonText="Submit" />
    </React.Fragment>
  )
}

CraftForm.propTypes = {
  materials: PropTypes.array,
  onCraftCreation:PropTypes.func
}
// const mapStateToProps = state => {
//   return{
//     questions: state.questions,
//   }
// }
export default  CraftForm;