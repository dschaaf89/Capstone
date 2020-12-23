import React from "react";
import PropTypes from "prop-types";
import Craft from "./Craft";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'


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
          <h1>crafts:</h1>
            <div className="container">
           
              {crafts.map((craft) => {
                return(
                
                <Craft
                  
                  whenCraftClicked={props.onCraftSelection}
                  url = {craft.url}
                  name={craft.name}
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
  onRecipeSelection: PropTypes.func
};

export default CraftList;