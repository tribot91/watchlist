import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Movie from './Movie'

var App = () => {
  return (
    <Router>
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' component={Movie} />
    </Router>
  );
}

export default App;