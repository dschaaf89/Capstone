import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import './RecipeList.css';

function RecipeList(props) {
  useFirestoreConnect([
    { collection: 'recipes' }
  ]);
  const recipes = useSelector(state => state.firestore.ordered.recipes);
  if (isLoaded(recipes)) {
    return (
      <div className = "recipeList">
      <React.Fragment>
        <hr />
        {recipes.map((recipe) => {
          return(
            <div className="recipeItem">
          <Recipe
            whenRecipeClicked={props.onRecipeSelection}
            name={recipe.name}
            description={recipe.description}
            id={recipe.id}
            key={recipe.id} />
            </div>
          )
        })}
       
      </React.Fragment>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

RecipeList.propTypes = {
  onRecipeSelection: PropTypes.func
};

export default RecipeList;