import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

function Travel(props) {
 
  return (
    <React.Fragment>
     
      <div onClick={() => props.whenTravelClicked(props.id)}>
        <div className="photo">
        <img src={props.url} alt="img of place of travel" width="150px" margin="0"/>
        </div>
        <h1>{props.name}</h1>
        <h3>{props.blog}</h3>
        <hr />
      </div>
     
    </React.Fragment>
  );
}

Travel.PropType = {
  whenTravelClicked:PropTypes.func,
  name: PropTypes.string,
  blog:PropTypes.string,
  url:PropTypes.string


}

export default Travel;