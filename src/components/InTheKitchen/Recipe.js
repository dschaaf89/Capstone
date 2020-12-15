import React from "react";
import PropTypes from "prop-types";

function Recipe(props) {
  console.log(props)
  return (
    <React.Fragment>
      <div onClick={() => props.whenRecipeClicked(props.id)}>
        <h1>{props.name}</h1>
        <h3>{props.ingredients}</h3>
        <h3>{props.steps}</h3>
        <h3>{props.description}</h3>


      </div>
      <hr />
    </React.Fragment>
  );
}

Recipe.PropType = {
  whenRecipeClicked:PropTypes.func,
  name: PropTypes.string,
  ingredients: PropTypes.string,
  steps: PropTypes.string


}

export default Recipe;