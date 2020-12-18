import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function AboutMe(props){
  useFirestoreConnect([
    { collection: 'aboutMe' }
  ]); 
   const b = useSelector(state => state.firestore.ordered.AboutMe);



  if (isLoaded(b)) {
    return (
      <React.Fragment>
        <hr />
        
          <h3>{b[0].name}</h3>
          <hr />
          <p>{b[0].about}</p>
        
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
AboutMe.PropTypes = {
  name: PropTypes.string,
  about:PropTypes.string,
}
export default AboutMe