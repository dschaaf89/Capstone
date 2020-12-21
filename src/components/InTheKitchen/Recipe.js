import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

function Recipe(props) {
  console.log(props)
  return (
    <React.Fragment>
     
      <div onClick={() => props.whenRecipeClicked(props.id)}>
        <img src={props.url} alt="img of food" width='100px' float='left' />
        <h1>{props.name}</h1>
        <h3>{props.ingredients}</h3>
        <h3>{props.steps}</h3>
        <h3>{props.description}</h3>
        <hr />
      </div>
     
    </React.Fragment>
  );
}

Recipe.PropType = {
  whenRecipeClicked:PropTypes.func,
  name: PropTypes.string,
  ingredients: PropTypes.array,
  steps: PropTypes.array,
  foodType:propTypes.string,
  url:PropTypes.string


}

export default Recipe;