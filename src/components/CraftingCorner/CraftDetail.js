import React from "react";
import PropTypes from "prop-types";

function CraftDetail(props){

  console.log(props);
  const { craft, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <div className="card1">
        <div className="container">
          <div id="craftDetails">
          <h1>{craft.name} Details</h1>
          <p>description: {craft.description}</p>
          <h2>ingredients: {craft.ingredients}</h2>
          <h3>steps: {craft.steps}</h3>
          
          
          
          </div>
        </div> 
      </div>
      
      <button onClick={ props.onClickingEdit }>Update Craft</button>
      <button onClick={()=> onClickingDelete(craft.id) }>Close Craft</button>
      <hr/>
    </React.Fragment>
  );
}

CraftDetail.propTypes = {
  craft: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CraftDetail;