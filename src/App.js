import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase/app';
import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();
  }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        // setIsSignedIn(!!user);

        if (!user) {
          // user logs out, handle something here
          console.log('User is not logged in');
          return;
        }
      });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />

          <Switch>
            <Redirect exact from='/' to='/photos' />

            <Route path='/photos' component={Photo} />
            <Route path='/signin' component={SignIn} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
