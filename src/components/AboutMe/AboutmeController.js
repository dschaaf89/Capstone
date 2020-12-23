import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import AboutMeForm from './AboutMeForm';
import AboutMe from './AboutMe';
import * as a from '../actions';
import { connect } from 'react-redux';

class AboutMeController extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {

    }
  }

  handleAboutMeClick = () => {
   console.log('hererere')
    if (this.state.selectedBio != null) {
      this.setState({
        selectedBio: null,
        editing: false
      });
    } else {
      
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedAboutMe = (id) => {
    console.log('here now')
    this.props.firestore.get({collection:'aboutMe', doc : id}).then((x)=>{
      const firestoreAboutMe = {
        name: x.get('name'),
        about: x.get('about'),
        id: x.id
      }
      this.setState({selectedAboutMe:firestoreAboutMe});
    });
  }
 
  

  
  handleEditAboutMeClick = () => {
    this.setState({editing: true});
  }
  handleEditingAboutMeInList = () => {
    //const { dispatch } = this.props;
    // const action = a.addBio(bioToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedAboutMe: null
    });
  }
  render() {
    const auth = this.props.firebase.auth();
    console.log(this.props)
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    console.log('test')
    // if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing ) {  
        
        currentlyVisibleState = <AboutMeForm  onEditAboutMe = {this.handleEditingAboutMeInList} />
        buttonText = "Return to AboutMe";
      } else {
        currentlyVisibleState = <AboutMe  />;
        buttonText = "Edit AboutMe";
      }
      console.log(((isLoaded(auth)) && (auth.currentUser == null)))

      if ((isLoaded(auth)) && (auth.currentUser == null)) {
        return (
          <React.Fragment>
            {currentlyVisibleState}
          </React.Fragment>
        )
      } 
      else {
        return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleEditAboutMeClick}>{buttonText}</button>
        </React.Fragment>
      )
      }
    }
  }
// }

AboutMeController.propTypes ={

}
const mapStateToProps = state => {
  return{
  FormVisibleOnPage:state.FormVisibleOnPage
}
}
AboutMeController = connect(mapStateToProps)(AboutMeController)
export default withFirestore(AboutMeController)