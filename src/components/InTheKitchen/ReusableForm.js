import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  console.log('reusable',props);
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' 
          defaultValue={props.name}
          />
            <textarea

          name='ingredients'
          placeholder='ingredients' />
        <textarea
          name='steps'
          placeholder='steps' />
          <textarea
          name='description'
          placeholder='description' />
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