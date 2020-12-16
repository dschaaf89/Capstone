import React from "react";
import PropTypes from "prop-types";
import Craft from "./Craft";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


function CraftList(props) {
  useFirestoreConnect([
    { collection: 'crafts' }
  ]);
  const crafts = useSelector(state => state.firestore.ordered.crafts);
  if (isLoaded(crafts)) {
    return (
      <React.Fragment>
       
        <div id ="craftList">
         
          <div className="card1">
          <h1>Crafts:</h1>
            <div className="container">
           
              {crafts.map((craft) => {
                return(
                
                <Craft
                  whenCraftClicked={props.onCraftSelection}
                  name={craft.name}
                  // ingredients= {craft.ingredients}
                  // steps={craft.steps}
                  description={craft.description}
                  id={craft.id}
                  key={craft.id} />
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

CraftList.propTypes = {
  onCraftSelection: PropTypes.func
};

export default CraftList;