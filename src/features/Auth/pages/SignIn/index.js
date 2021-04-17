import firebase from 'firebase';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',

  signInSuccessUrl: '/photos',

  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const SignIn = () => {
  return (
    <div className='text-center'>
      <h1>Login Form</h1>

      <p>Or login with social accounts</p>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignIn;
