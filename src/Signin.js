import React from 'react';
import firebase from "firebase/app";

function Signin() {
  
    function doSignOut() {
      firebase.auth().signOut().then(function() {
        console.log("Successfully signed out!");
      }).catch(function(error) {
        console.log(error.message);
      });
    }

      function doSignIn(event) {
        event.preventDefault();
        const email = event.target.signinEmail.value;
        const password = event.target.signinPassword.value;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
          alert('you are signed in')
          console.log("Successfully signed in!");
        }).catch(function(error) {
          console.log(error.message);
        });
      }


  return (
    <React.Fragment>
      <h1>Sign In</h1>
  <form onSubmit={doSignIn}>
    <input
      type='text'
      name='signinEmail'
      placeholder='email' />
    <input
      type='password'
      name='signinPassword'
      placeholder='Password' /> 
    <button type='submit'>Sign in</button>
  </form>

      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
      alert("you have signed out");
    </React.Fragment>
      
  );
}

export default Signin 