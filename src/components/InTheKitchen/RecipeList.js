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
      <React.Fragment>
        
        <div id ="recipeList">
         
          <div className="card">
            <div className="container">
           
              {recipes.map((recipe) => {
                return(
                
                <Recipe
                  whenRecipeClicked={props.onRecipeSelection}
                  name={recipe.name}
                  // ingredients= {recipe.ingredients}
                  // steps={recipe.steps}
                  description={recipe.description}
                  id={recipe.id}
                  key={recipe.id} />
                )
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
      
    
      
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