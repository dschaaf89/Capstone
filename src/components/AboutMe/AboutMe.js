import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
function AboutMe(props){

  return (
    <div>
      hi
    </div>
  )
  // useFirestoreConnect([
  //   { collection: 'aboutMe' }
  // ]); 
  //  const b = useSelector(state => state.firestore.ordered.aboutMe);

  // console.log(b);

  // if (isLoaded(b)) {
  //   return (
  //     <React.Fragment>
  //       <hr />
        
  //         <h3>{b[0].name}</h3>
  //         <h6>{b[0].url}</h6>
  //         <hr />
  //         <p>{b[0].about}</p>
        
  //     </React.Fragment>
  //   );
  // } else {
  //   return (
  //     <React.Fragment>
  //       <h3>Loading...</h3>
  //     </React.Fragment>
  //   )
  // }
 }
AboutMe.propType = {
name: PropTypes.string,
github:PropTypes.string,
linkedin:PropTypes.string,
email: PropTypes.string,
about:PropTypes.string
}
export default AboutMe;