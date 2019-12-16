import React, { Component } from 'react';
import movielist from '../data/movielist.json';
import { Link } from 'react-router-dom';
import RatingBar from './RatingBar';
import './MovieList.scss';

class MovieList extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return (
      this.state.loading ?
        <div className='spinner'></div> :
        <div className='movie-list-bg'>
          {movielist.map(movie => <div key={movie.id}>
            <img className='rounded' src={movie.posterurl}
              alt='Poster' />
            <div className='movie-details'>
              <b className='top-margin movie-title'>
                {movie.originalTitle}
              </b>
              <div className='small-top-margin movie-info'>
                {movie.year} &middot;
                <span className='genres'>
                  {movie.genres.map(genre => <span key={genre} className='comma'>{genre}</span>)}
                </span>
                &middot; {Math.floor(parseInt(movie.duration.replace(/\D/g, '')) / 60)}h {parseInt(movie.duration.replace(/\D/g, '')) % 60}min
              </div>
              <div className='imdb-rating'>
                <b>{movie.imdbRating}</b>
                <span>/10</span>
              </div>
              <RatingBar rating={movie.imdbRating} />
              <Link style={{ margin: '50px 0' }} className='noDecoration btn orange-bg' to={'/movies/' + movie.id}>
                MOVIE DETAILS
              </Link>
            </div>
          </div>)}
        </div>
    );
  }
}

export default MovieList;