import LoginPage from "features/Auth/pages/LoginPage";
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />

          <Switch>
            <Redirect exact from='/' to='/photos' />

            <Route path='/photos' component={Photo} />
            <Route path='/signin' component={LoginPage} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
