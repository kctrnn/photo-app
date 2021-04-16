import productApi from 'api/productApi';
import React, { Suspense, useEffect, useState } from 'react';
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

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 5,
        };

        const response = await productApi.getAll(params);
        console.log(response);

        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    fetchProductList();
  }, []);

  console.log('Product List: ', productList);

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />

          <Switch>
            <Redirect exact from='/' to='/photos' />

            <Route path='/photos' component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
