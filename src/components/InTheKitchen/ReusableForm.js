import React from "react";
import PropTypes from "prop-types";
import FileUploadForm from '../../components/FileUploadForm';
class ReusableForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ['0'],
      steps:['0'],
      url:''
      
    };
  }
  test = (e) => {
   
    this.setState({
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      url:e
    })
    
  }
  render() {
    if(this.props.ingredients.length === 0)
    {
    return (
      <React.Fragment>
        <FileUploadForm
        test={ this.test}/>
        <form onSubmit={this.props.formSubmissionHandler}>
        <div className="row">
        <div className="col">
          <input
            type='text'
            name='name'
            placeholder='Name of Recipe'
            defaultValue={this.props.name} />
            </div>
            <div className="col">
          <div id="dynamicInput">
            {this.state.ingredients.map(x =>
              <input
                className='ingredients'
                type='text'
                name={'ingredients'+x}
                defaultValue={x}
                placeholder='' />
            )}
            <button onClick={() => this.appendIngredient()} type='button'>
              CLICK ME TO ADD ingredients
            </button>
          </div>
          </div>
          <div className="col">
          <div id="dynamicInput2">
            {this.state.steps.map(x =>
              <input
                className='steps'
                type='text'
                name={'steps'+x}
                defaultValue={x}
                placeholder='' />

            )}
            <button onClick={() => this.appendSteps()} type='button'>
              CLICK ME TO ADD STEPS
             </button>
          </div>
          </div>
          <div className="col">
          <textarea
            type='text'
            name='description'
            placeholder='description'
            defaultValue={this.props.description} />
            </div>
            <div className="col">
            <input
            type='text'
            name='url'
            placeholder='url'
            defaultValue={this.state.url} />
            </div>
        <button type='submit'>{this.props.buttonText}</button>
        </div>
        </form>

      </React.Fragment>
    );
  }

else{
  return (
    <React.Fragment>
      <FileUploadForm/>
      <form onSubmit={this.props.formSubmissionHandler}>
      <div className="row">
        <div className="col">
        <input
          type='text'
          name='name'
          placeholder='Name of Recipe'
          defaultValue={this.props.name} />
          </div>
          <div className="col">
        <div id="dynamicInput">
          {this.props.ingredients.map(x =>
            <input
              className='ingredients'
              type='text'
              name={'ingredients'+x}
              defaultValue= {this.props.ingredients}
              placeholder='' />
          )}
          <button onClick={() => this.appendIngredient()} type='button'>
            CLICK ME TO ADD INGREDIENTS
          </button>
        </div>
        </div>
        <div className="col">
        <div id="dynamicInput2">
          {this.props.steps.map(x =>
            <input
              className='steps'
              type='text'
              name={'steps'+x}
              defaultValue={x}
              placeholder='' />

          )}
          <button onClick={() => this.appendSteps()} type='button'>
            CLICK ME TO ADD STEPS
           </button>
        </div>
        </div>
        <div className="col">
        <textarea
          type='text'
          name='description'
          placeholder='description'
          defaultValue={this.props.description} />
          <div className="col"></div>
           <input
            type='text'
            name='url'
            placeholder='url'
            defaultValue={this.state.url} />
            </div>
      <button type='submit'>{this.props.buttonText}</button>
  
      </div>
      </form>

    </React.Fragment>
  );
}
}

  appendIngredient() {
    var newInput = this.state.ingredients.length;
    this.setState(prevState => ({ ingredients: prevState.ingredients.concat([newInput]) }));
 
  }
  appendSteps() {
    var newInput = this.state.steps.length;
    this.setState(prevState => ({ steps: prevState.steps.concat([newInput]) }));
  }

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;