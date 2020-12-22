import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
function AboutMe(props){

 
  useFirestoreConnect([
    { collection: 'aboutMe' }
  ]); 
   const b = useSelector(state => state.firestore.ordered.aboutMe);

  console.log(b);

  if (isLoaded(b)) {
    return (
      <React.Fragment>
          <div className="card1">
            <div id="aboutMe">
        
          <h1>{b[0].name}</h1>
          <img src ={b[0].url} alt='picture of owner' width ="200 px"/>
          
          <h2>{b[0].about}</h2>
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
AboutMe.propType = {
name: PropTypes.string,
about:PropTypes.string
}
export default AboutMe;