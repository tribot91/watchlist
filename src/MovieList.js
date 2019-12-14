import React from 'react';
import movielist from './data/movielist.json'
import { Link } from "react-router-dom";

function MovieList() {
  return (
    <div
      style={{
        padding: '8%',
        backgroundImage: 'linear-gradient(to bottom, orange, orange 30%, white 40%)',
        height: '100vh',
      }}>
      {movielist.map(movie => <div key={movie.id}>
        <img src='http://t0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD'
          style={{ maxWidth: '100%', height: 'auto' }}
          alt='Joker' />
        {/* <img src={movie.posterurl} alt='Link is broken :('/> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: 20
          }}>
          <b style={{ fontSize: '28px', textAlign: 'center' }}>
            {movie.originalTitle}
          </b>
          <div>
            {movie.year} . {movie.genres.map(genre => `${genre}, `)} . {Math.floor(parseInt(movie.duration.replace(/\D/g, '')) / 60)}h {parseInt(movie.duration.replace(/\D/g, '')) % 60}min
          </div>
          <div>
            <b style={{ fontSize: '24px' }}>{movie.imdbRating}</b><span style={{ color: 'gray' }}>/10</span>
          </div>
          <div className='parentDiv2'>
            <div className='childDiv2' style={{ background: 'lightgray' }} />
            <div className='childDiv2 orange-bg' style={{ width: `${10 * movie.imdbRating}%` }} />
          </div>
          <Link to={"/movies/" + movie.id}>
            <div className='button orange-bg'>MOVIE DETAILS</div>
          </Link>
        </div>
      </div>)}
    </div>
  );
}

export default MovieList;
