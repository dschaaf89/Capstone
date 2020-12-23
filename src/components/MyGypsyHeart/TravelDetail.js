import React from "react";
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';


function TravelDetail(props) {
  const { travel, onClickingDelete } = props;

  if ((isLoaded(props.firebase.auth())) && (props.firebase.auth().currentUser == null))  {
    return (
      <React.Fragment>
        <div className="card3">
          <div className="container">
            <div id="travelDetails">
              <h1>{travel.name} Details</h1>
              <img src={travel.url} alt="" width="200px"></img>
              <div id="blog">
              <h3> {travel.blog}</h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <div className="card3">
        <div className="container">
          <div id="travelDetails">
            <h1>{travel.name}</h1>
            <img src={travel.url} alt =''width="500px"></img>
            <div id="blog">
            <p>blog: {travel.blog}</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={props.onClickingEdit}>Update Travel</button>
      <button onClick={() => onClickingDelete(travel.id)}>Close Travel</button>
      <hr />
    </React.Fragment>
  )

}


TravelDetail.propTypes = {
  Travel: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default withFirestore(TravelDetail);





{/* <React.Fragment>
<div className="card">
  <div className="container">
    <div id="recipeDetails">
    <h1>{Travel.name} Details</h1>
    <img src={Travel.url}></img>
    <p>description: {Travel.description}</p>
    <h2>ingredients:<ul> 
     {Travel.ingredients.map((ingredients)=>
        <li>{ingredients}</li>)
    }
    </ul>
    </h2>
    <h3>steps: 
    <ul> 
     {Travel.steps.map((step)=>
        <li>{step}</li>)
    }
   
    </ul>
    </h3>
    </div>
  </div> 
</div>

<button onClick={ props.onClickingEdit }>Update Travel</button>
<button onClick={()=> onClickingDelete(Travel.id) }>Close Travel</button>
<hr/>
</React.Fragment> */}