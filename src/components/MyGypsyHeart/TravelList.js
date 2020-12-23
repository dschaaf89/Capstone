import React from "react";
import PropTypes from "prop-types";
import Travel from "./Travel";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import './TravelList.css';

function TravelList(props) {
  useFirestoreConnect([
    { collection: 'travel' }
  ]);
  const travel = useSelector(state => state.firestore.ordered.travel);
  if (isLoaded(travel)) {
    return (
      <React.Fragment>
       
        <div id ="travelList">
         
          <div className="card3">
          <h1>Travel:</h1>
            <div className="container">
           
              {travel.map((travel) => {
                return(
                
                <Travel
                  
                  whenTravelClicked={props.onTravelSelection}
                  url = {travel.url}
                  name={travel.name}
                  id={travel.id}
                  key={travel.id} />
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

TravelList.propTypes = {
  onTravelSelection: PropTypes.func
};

export default TravelList;