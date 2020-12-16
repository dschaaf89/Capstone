import React from 'react';
import CraftForm from './CraftForm';
import CraftList from './CraftList';
import CraftDetail from './CraftDetail';
import { connect } from 'react-redux';
import EditCraftForm from './EditCraftForm';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'



class InTheKitchenController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCraft: null,
      editing: false
    };
  }


  handleClick = () => {
    if (this.state.selectedCraft != null) {
      this.setState({
        selectedCraft: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewCraftToList = (newCraft) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedCraft = (id) => {
    this.props.firestore.get({collection:'crafts', doc : id}).then((craft)=>{
      const firestoreCraft = {
        name: craft.get('name'),
        materials: craft.get('materials'),
        steps: craft.get('steps'),
        description: craft.get('description'),
        type:craft.get('type'),
        id: craft.id
      }
      this.setState({selectedCraft:firestoreCraft});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCraftInList = () => {
    this.setState({
      editing: false,
      selectedCraft: null
    });
  }

  handleDeletingCraft = (id) => {
    this.props.firestore.delete({collection: 'crafts', doc: id});
    this.setState({selectedCraft: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {  
          
      currentlyVisibleState = <EditCraftForm craft = {this.state.selectedCraft} onEditCraft = {this.handleEditingCraftInList} />
      buttonText = "Return to Craft List";
    } else if (this.state.selectedCraft != null) {
      currentlyVisibleState = 
      <CraftDetail 
        craft = {this.state.selectedCraft} 
        onClickingDelete = {this.handleDeletingCraft} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Craft List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <CraftForm onCraftCreation={this.handleAddingNewCraftToList}  />;
      buttonText = "Return to Craft List";
    } else {
      currentlyVisibleState = <CraftList  onCraftSelection={this.handleChangingSelectedCraft} />;
      console.log(currentlyVisibleState);
      buttonText = "Add Craft";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}



InTheKitchenController.propTypes = {
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

InTheKitchenController = connect(mapStateToProps)(InTheKitchenController);

export default withFirestore(InTheKitchenController);