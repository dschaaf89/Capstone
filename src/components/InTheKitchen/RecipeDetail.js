import React from "react";
import PropTypes from "prop-types";

function RecipeDetail(props){

  console.log(props);
  const { recipe, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <div className="card">
        <div className="container">
          <div id="recipeDetails">
          <h1>{recipe.name} Details</h1>
          <img src ={recipe.Url}/>
          <h2>type of recipe: {recipe.type}</h2>
          <p>description: {recipe.description}</p>
          <h2>ingredients: {recipe.ingredients}</h2>
          <h3>steps: {recipe.steps}</h3>
          
          </div>
        </div> 
      </div>
      
      <button onClick={ props.onClickingEdit }>Update Recipe</button>
      <button onClick={()=> onClickingDelete(recipe.id) }>Close Recipe</button>
      <hr/>
    </React.Fragment>
  );
}

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default RecipeDetail;