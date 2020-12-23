import React from 'react';
import TravelForm from './TravelForm';
import TravelList from './TravelList';
import TravelDetail from './TravelDetail';
import { connect } from 'react-redux';
import EditTravelForm from './EditTravelForm';
import * as a from '../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'



class MyGypsyHeartController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTravel: null,
      editing: false
    };
  }


  handleClick = () => {
    if (this.state.selectedTravel != null) {
      this.setState({
        selectedTravel: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewTravelToList = (newTravel) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedTravel = (id) => {
    this.props.firestore.get({ collection: 'travel', doc: id }).then((travel) => {
      const firestoreTravel = {
        name: travel.get('name'),
        blog: travel.get('blog'),
        url: travel.get('url'),
        id: travel.id
      }
      this.setState({ selectedTravel: firestoreTravel });
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingTravelInList = () => {
    this.setState({
      editing: false,
      selectedTravel: null
    });
  }

  handleDeletingTravel = (id) => {
    this.props.firestore.delete({ collection: 'travel', doc: id });
    this.setState({ selectedTravel: null });
  }



    render() {
      const auth = this.props.firebase.auth();
      console.log(auth);
      console.log(this.props)
      if (!isLoaded(auth)) {
        return (
          <React.Fragment>
            <h1>Loading...</h1>
          </React.Fragment>
        )
      }
      console.log('test')
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = <EditTravelForm travel={this.state.selectedTravel} onEditTravel={this.handleEditingTravelInList} />
        buttonText = "Return to Travel List";
      } else if (this.state.selectedTravel != null) {
        currentlyVisibleState =
          <TravelDetail
          onClickReturn = {this.handleClick}
            travel={this.state.selectedTravel}
            onClickingDelete={this.handleDeletingTravel}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Travel List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <TravelForm onTravelCreation={this.handleAddingNewTravelToList} />;
        buttonText = "Return to Travel List";
      } else {
        currentlyVisibleState = <TravelList onTravelSelection={this.handleChangingSelectedTravel} />;
        buttonText = "Add Travel";
      }
      console.log(((isLoaded(auth)) && (auth.currentUser == null)))

      if ((isLoaded(auth)) && (auth.currentUser == null)) {
        console.log(auth);
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
            <button onClick={this.handleClick}>{buttonText}</button>
          </React.Fragment>
        )
      }
    }
  }












  MyGypsyHeartController.propTypes = {
  };

  const mapStateToProps = state => {
    return {
      formVisibleOnPage: state.formVisibleOnPage
    }
  }

  MyGypsyHeartController = connect(mapStateToProps)(MyGypsyHeartController);

  export default withFirestore(MyGypsyHeartController);