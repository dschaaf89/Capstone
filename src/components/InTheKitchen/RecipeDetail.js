import React from "react";
import PropTypes from "prop-types";

function RecipeDetail(props){
  const { recipe, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Recipe Detail</h1>
      <p><em>{recipe.ingredients}</em></p>
      <p><em>{recipe.steps}</em></p>
      <p><em>{recipe.description}</em></p>
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