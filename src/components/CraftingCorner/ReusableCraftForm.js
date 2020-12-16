import React from "react";
import PropTypes from "prop-types";

class ReusableForm extends React.Component {
  constructor(props) {
          super(props);
          this.state = { inputs: ['0'] };
      }
  render(){
    console.log(this.props)
    console.log(this.state)
    return (
      <React.Fragment>
        <form onSubmit={this.props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='Name of Craft' />
          <div id="dynamicInput">
            {this.state.inputs.map(q => 
              <input
              className='materials'
              type='text'
              name={'materials'+  q}
              defaultValue= ''
              placeholder='' />
              )}
              <button onClick={ () => this.appendInput() } type='button'>
                 CLICK ME TO ADD MATERIALS
             </button>
          </div>
          
          <button type='submit'>{this.props.buttonText}</button>
        </form>
        
      </React.Fragment>
    );
  }

  appendInput() {
    var newInput = this.state.inputs.length  ;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    console.log('hhhhhhhhhhhhhhhh',this.state)
  }

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;