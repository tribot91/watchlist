import React, { Component } from 'react';
import movie from './data/0001.json'
import './Movie.scss'

class Movie extends Component {
  constructor() {
    super();
    this.duration = parseInt(movie.duration.replace(/\D/g, ''));
    this.hour = Math.floor(this.duration / 60);
    this.minute = this.duration % 60;
    this.state = { isOnWatchlist: false, movie: {} };
  }

  componentWillMount() {
    import(`./data/${this.props.match.params.id}.json`)
      .then(movie => this.setState({ movie: movie.default }))
  }

  render() {
    return (
      <div
        style={{
          padding: '5%',
          backgroundImage: 'linear-gradient(to bottom, orange, orange 15%, white 20%)',
          height: '100vh'
        }}>
        <div style={{ width: 150, height: 'auto' }}>
          <div className='parentDiv'>
            <img src='http://t0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD'
              style={{ width: '100%', height: 'auto' }}
              className='rounded'
              alt='Joker' />
            <div onClick={() => { this.setState({ isOnWatchlist: !this.state.isOnWatchlist }) }}
              className={`childDiv ${this.state.isOnWatchlist ? 'red-bg' : 'orange-bg'}`}
              style={{
                borderRadius: '50%', width: 30, height: 30, display: 'flex',
                justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 25
              }}
            >
              {this.state.isOnWatchlist ? '-' : '+'}
            </div>
          </div>
        </div>
        {/* <img src={movie.posterurl} alt='Link is broken :('/> */}
        <span className='topMargin' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <b style={{ width: 'min-content', textAlign: 'center', paddingRight: 5, fontSize: 18 }}>{this.state.movie.originalTitle}</b> {/*  whiteSpace: 'nowrap' */}
            <div className='rounded orange' style={{ border: '2px solid orange', padding: '0 5px', marginRight: 10, height: 'fit-content' }}>{this.state.movie.imdbRating}</div>
          </div>
          <div className='parentDiv2'>
            <div className='childDiv2' style={{ background: 'lightgray' }}></div>
            <div className='childDiv2 orange-bg' style={{ width: `${10 * this.state.movie.imdbRating}%` }}></div>
          </div>
        </span>
        <div style={{ display: 'flex', fontSize: 12, color: 'gray' }}>
          {this.state.movie.year} &middot;&nbsp; {(this.state.movie.genres || []).map(genre => <div key={genre} className='comma'>{genre}</div>)} &nbsp;&middot; {this.hour}h {this.minute}min
        </div>
        <div style={{ fontSize: 14 }}>{this.state.movie.storyline}</div>
        <hr className='topMargin' />
        <div className='topMargin' style={{ display: 'grid', gridGap: 5, fontSize: 14 }}>
          <b style={{ gridColumn: 1 }}>Director: </b>
          <span style={{ gridColumn: 2 }}>
            {(this.state.movie.directors || []).map(director => <span key={director} className="comma orange" href={'#'}>{director}</span>)}
            {(this.state.movie.directors || []).length > 2 ? `| ${(this.state.movie.directors || []).length - 2} more credits >>` : null}
          </span>
          <b style={{ gridColumn: 1 }}>Writers: </b>
          <span style={{ gridColumn: 2 }}>
            {(this.state.movie.writers || []).map(writer => <span key={writer} className="comma orange" href={'#'}>{writer}</span>)}
            {(this.state.movie.writers || []).length > 2 ? `| ${(this.state.movie.writers || []).length - 2} more credits >>` : null}
          </span>
          <b style={{ gridColumn: 1 }}>Stars: </b>
          <span style={{ gridColumn: 2 }}>
            {(this.state.movie.actors || []).map(actor => <span key={actor} className="comma orange" href={'#'}>{actor}</span>)}
            {(this.state.movie.actors || []).length > 2 ? ' | See full cast & crew >>' : null}
          </span>
        </div>
        <div className='topMargin' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={`button ${this.state.isOnWatchlist ? 'red-bg' : 'orange-bg'}`}
            onClick={() => { this.setState({ isOnWatchlist: !this.state.isOnWatchlist }) }} >{this.state.isOnWatchlist ? '-' : '+'} ADD TO WATCHLIST</div>
        </div>
      </div>
    );
  }
}

export default Movie;