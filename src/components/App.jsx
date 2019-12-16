import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Movie from './Movie';
import NotFound from './NotFound';

var App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' component={Movie} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;