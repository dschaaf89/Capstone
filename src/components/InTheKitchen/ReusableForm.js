
import PropTypes from "prop-types";
import React  from 'react';
import FileUploadForm from '../../components/FileUploadForm';


function ReusableForm(props) {
  console.log('reusable', props);  
  return (
   
    <React.Fragment>
       <FileUploadForm/>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          defaultValue={props.name}
        />
        <textarea
          name='ingredients'
          placeholder='ingredients'
          defaultValue={props.ingredients} />
        <textarea
          name='steps'
          placeholder='steps'
          defaultValue={props.steps} />
        <textarea
          name='description'
          placeholder='description'
          defaultValue={props.description} />
        <select id="type" name="type">
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>
        </select> 
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;