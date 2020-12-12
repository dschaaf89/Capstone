import React from "react";
import PropTypes from "prop-types";

function Recipe(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenRecipeClicked(props.id)}>
        <h1>{props.recipeName}</h1>
        <h3>{props.ingredients.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
        </h3>


      </div>
      <hr />
    </React.Fragment>
  );
}

Recipe.PropType = {
  recipeName: PropTypes.string,
  ingredients: PropTypes.array,
  steps: PropTypes.array

}

export default Recipe;