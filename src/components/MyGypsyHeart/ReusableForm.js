import React from "react";
import PropTypes from "prop-types";
import FileUploadForm from '../../components/FileUploadForm';
class ReusableForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          url:''
    };
  }
  test = (e) => {
   
    this.setState({
      url:e
    })
    
  }

  render(){
    return(
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
        <textarea
          type='text'
          name='blog'
          placeholder='blog'
          defaultValue={this.props.blog} />
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
    )
  }

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;