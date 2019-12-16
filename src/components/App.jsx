import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Movie from './Movie';
import NotFound from './NotFound';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route path='/movies/:id' component={Movie} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;