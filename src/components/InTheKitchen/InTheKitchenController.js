import React from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import { connect } from 'react-redux';
import EditRecipeForm from './EditRecipeForm';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'



class InTheKitchenController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: null,
      editing: false
    };
  }


  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        selectedRecipe: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewRecipeToList = (newRecipe) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedRecipe = (id) => {
    this.props.firestore.get({ collection: 'recipes', doc: id }).then((recipe) => {
      const firestoreRecipe = {
        name: recipe.get('name'),
        ingredients: recipe.get('ingredients'),
        steps: recipe.get('steps'),
        description: recipe.get('description'),
        foodType: recipe.get('foodType'),
        url: recipe.get('url'),
        id: recipe.id
      }
      this.setState({ selectedRecipe: firestoreRecipe });
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingRecipeInList = () => {
    this.setState({
      editing: false,
      selectedRecipe: null
    });
  }

  handleDeletingRecipe = (id) => {
    this.props.firestore.delete({ collection: 'recipes', doc: id });
    this.setState({ selectedRecipe: null });
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
      if (this.state.editing) {
        currentlyVisibleState = <EditRecipeForm recipe={this.state.selectedRecipe} onEditRecipe={this.handleEditingRecipeInList} />
        buttonText = "Return to Recipe List";
      } else if (this.state.selectedRecipe != null) {
        currentlyVisibleState =
          <RecipeDetail
            recipe={this.state.selectedRecipe}
            onClickingDelete={this.handleDeletingRecipe}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Recipe List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <RecipeForm onRecipeCreation={this.handleAddingNewRecipeToList} />;
        buttonText = "Return to Recipe List";
      } else {
        currentlyVisibleState = <RecipeList onRecipeSelection={this.handleChangingSelectedRecipe} />;
        buttonText = "Add Recipe";
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
            <button onClick={this.handleRecipeClick}>{buttonText}</button>
          </React.Fragment>
        )
      }
    }
  }








  //       let currentlyVisibleState = null;
  //       let buttonText = null;
  //       if (this.state.editing ) {      
  //         currentlyVisibleState = <EditRecipeForm recipe = {this.state.selectedRecipe} onEditRecipe = {this.handleEditingRecipeInList} />
  //         buttonText = "Return to Recipe List";
  //       } else if (this.state.selectedRecipe != null) {
  //         currentlyVisibleState = 
  //         <RecipeDetail 
  //           recipe = {this.state.selectedRecipe} 
  //           onClickingDelete = {this.handleDeletingRecipe} 
  //           onClickingEdit = {this.handleEditClick} />
  //         buttonText = "Return to Recipe List";
  //       } else if (this.props.formVisibleOnPage) {
  //         currentlyVisibleState = <RecipeForm onRecipeCreation={this.handleAddingNewRecipeToList}  />;
  //         buttonText = "Return to Recipe List";
  //       } else {
  //         currentlyVisibleState = <RecipeList  onRecipeSelection={this.handleChangingSelectedRecipe} />;
  //         buttonText = "Add Recipe";
  //       }
  //       if((isLoaded(auth))&&(auth.currentUser==null)){
  //         return(
  //           currentlyVisibleState
  //         )
  //       }else{
  //       return (
  //         <React.Fragment>
  //           {currentlyVisibleState}
  //           <button onClick={this.handleClick}>{buttonText}</button>
  //         </React.Fragment>
  //       );
  //       }

  //     }
  // }



  InTheKitchenController.propTypes = {
  };

  const mapStateToProps = state => {
    return {
      formVisibleOnPage: state.formVisibleOnPage
    }
  }

  InTheKitchenController = connect(mapStateToProps)(InTheKitchenController);

  export default withFirestore(InTheKitchenController);