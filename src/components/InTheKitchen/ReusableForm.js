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
    console.log(this.state)
    this.setState({
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      url:e
    })
    console.log(this.state)
  }
  render() {
    console.log(this.props)
    console.log(this.state)
    //console.log('this.props.ingredients',this.props.ingredients)
    if(this.props.ingredients.length === 0)
    {
    return (
      <React.Fragment>
        <FileUploadForm
        test={ this.test}/>
        <form onSubmit={this.props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='Name of Recipe'
            defaultValue={this.props.name} />
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
          <textarea
            type='text'
            name='description'
            placeholder='description'
            defaultValue={this.props.description} />
            <input
            type='text'
            name='url'
            placeholder='url'
            defaultValue={this.state.url} />
        <button type='submit'>{this.props.buttonText}</button>
        </form>

      </React.Fragment>
    );
  }

else{
  return (
    <React.Fragment>
      <FileUploadForm/>
      <form onSubmit={this.props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Recipe'
          defaultValue={this.props.name} />
        <div id="dynamicInput">
          {this.props.ingredients.map(x =>
            <input
              className='ingredients'
              type='text'
              name={'ingredients'+x}
              defaultValue={x}
              placeholder='' />
          )}
          <button onClick={() => this.appendIngredient()} type='button'>
            CLICK ME TO ADD INGREDIENTS
          </button>
        </div>
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
        <textarea
          type='text'
          name='description'
          placeholder='description'
          defaultValue={this.props.description} />
           <input
            type='text'
            name='url'
            placeholder='url'
            defaultValue={this.state.url} />
      <button type='submit'>{this.props.buttonText}</button>
      </form>

    </React.Fragment>
  );
}
}

  appendIngredient() {
    var newInput = this.state.ingredients.length;
    this.setState(prevState => ({ ingredients: prevState.ingredients.concat([newInput]) }));
    console.log('hhhhhhhhhhhhhhhh', this.state)
  }
  appendSteps() {
    var newInput = this.state.steps.length;
    this.setState(prevState => ({ steps: prevState.steps.concat([newInput]) }));
    console.log('hhhhhhhhhhhhhhhh', this.state)
  }

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;