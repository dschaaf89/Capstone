  
import React from 'react';
import PropTypes from 'prop-types'
import { useFirestore } from 'react-redux-firebase'
import ReusableCraftForm from './ReusableCraftForm'


function CraftForm(props){
  const firestore = useFirestore();

  function addCraftToFireStore(event){
    event.preventDefault();
   
    
    const materials =[];
    const step = [];
    const stepList = event.target.getElementsByClassName("steps")
    const materialsList = event.target.getElementsByClassName("materials")
    
    for(let i = 0 ; i < materialsList.length ; i++ )
    {
      
      materials.push(materialsList[i].value);
      
    }
    for(let j = 0; j<stepList.length; j++){
      
      step.push(stepList[j].value);
    }
    
 
    
   
    //this.props.onSurveyCreation();
    return firestore.collection('crafts').add(
      {
        name:event.target.name.value,
        materials: materials,
        steps:step,
        description:event.target.description.value,
        url:event.target.url.value

      }
        
    )
  }

  return (
    <React.Fragment>
      <div className="card1">
      <ReusableCraftForm 
        materials= {[]}
        steps= {[]}
        formSubmissionHandler={addCraftToFireStore}
        buttonText="Submit" />
        </div>
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