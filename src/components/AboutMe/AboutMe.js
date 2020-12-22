import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect,} from 'react-redux-firebase';

function AboutMe(props){
return (
<div className='container'>
  <div className="card1">
    <h1>About {props.name}</h1> 
    <img src {props.url} alt="pic of owner"></img>
    <h3>props.about</h3>
    
  </div>
</div>

)
} 
export default AboutMe