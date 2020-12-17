import React from "react";
import PropTypes from "prop-types";

class ReusableCraftForm extends React.Component {
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
            placeholder='Name of Craft' 
            defaultValue ={this.props.name}/>
          <div id="dynamicInput">
            {this.props.materials.map(x => 
              <input
              className='materials'
              type='text'
              name={'materials'+  x}
              defaultValue= {x}
              placeholder='' />
              )}
              <button onClick={ () => this.appendInput() } type='button'>
                 CLICK ME TO ADD MATERIALS
             </button>
          </div>
          <div id="dynamicInput2">
            {this.props.steps.map(x => 
              <input
              className='steps'
              type='text'
              name={'steps'+  x}
              defaultValue= {x}
              placeholder='' />
              
              )}
              <button onClick={ () => this.appendInput() } type='button'>
                 CLICK ME TO ADD STEPS
             </button>
          </div>
           <textarea
          name='description'
          placeholder='description'
          defaultValue= {this.props.description} />

          
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

ReusableCraftForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableCraftForm;