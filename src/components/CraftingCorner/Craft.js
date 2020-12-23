import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

function Recipe(props) {
  console.log(props)
  return (
    <React.Fragment>
     
      <div onClick={() => props.whenCraftClicked(props.id)}>
       
        <div className="photo">
        <img src = {props.url} alt = "craft" width="150px"/>
        </div>
        <h1>{props.name}</h1>
        <h3>{props.materials}</h3>
        <h3>{props.steps}</h3>
        <h3>{props.description}</h3>
        <hr />
      </div>
     
    </React.Fragment>
  );
}

Recipe.PropType = {
  whenCraftClicked:PropTypes.func,
  name: PropTypes.string,
  materials:PropTypes.array,
  steps: PropTypes.array,
  url:PropTypes.string


}

export default Recipe;