import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  console.log(props)
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
            <textarea
          name='ingredients'
          placeholder='ingredients' />
        <textarea
          name='steps'
          placeholder='steps' />
          <textarea
          name='description'
          placeholder='description' />
          
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