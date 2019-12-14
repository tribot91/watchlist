import React, { Component } from 'react';
import movielist from '../data/movielist.json'
import { Link } from "react-router-dom";
import RatingBar from './RatingBar';

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
        <div className="spinner"></div> :
        <div
          style={{
            padding: '8%',
            backgroundImage: 'linear-gradient(to bottom, orange, orange 30%, white 40%)',
            backgroundAttachment: 'fixed'
          }}>
          {movielist.map(movie => <div key={movie.id}>
            <img src={movie.posterurl}//'http://t0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD'
              style={{ maxWidth: '100%', height: 'auto' }}
              alt='Poster' />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginBottom: 20
              }}>
              <b className='top-margin' style={{ fontSize: '28px', textAlign: 'center' }}>
                {movie.originalTitle}
              </b>
              <div className='small-top-margin details'>
                {movie.year} &middot; {movie.genres.map(genre => <span key={genre} className='comma'>{genre}</span>)} &middot; {Math.floor(parseInt(movie.duration.replace(/\D/g, '')) / 60)}h {parseInt(movie.duration.replace(/\D/g, '')) % 60}min
              </div>
              <div style={{ margin: '15px 0 25px' }}>
                <b style={{ fontSize: '24px' }}>{movie.imdbRating}</b><span style={{ color: 'gray' }}>/10</span>
              </div>
              <RatingBar rating={movie.imdbRating} />
              <Link style={{ margin: '50px 0' }} className='noDecoration button orange-bg' to={"/movies/" + movie.id}>
                MOVIE DETAILS
              </Link>
            </div>
          </div>)}
        </div>
    );
  }
}

export default MovieList;