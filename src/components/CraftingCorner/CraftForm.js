  
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
    const step = [];
    const stepList = event.target.getElementsByClassName("steps")
    const materialsList = event.target.getElementsByClassName("materials")
    console.log(materialsList.length)
    console.log(stepList.length)
    for(let i = 0 ; i < materialsList.length ; i++ )
    {
      console.log(materialsList[i].value);
      materials.push(materialsList[i].value);
      console.log(stepList[i].value);
      step.push(stepList[i].value);
    }
    
     console.log(materials); 
    
   
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