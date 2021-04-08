import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import NotFound from './components/NotFound';
import Photo from './features/Photo';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/photos' />

        <Route path='/photos' component={Photo} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
