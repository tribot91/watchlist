import React, { Component } from 'react';
import './Movie.scss'
import RatingBar from './RatingBar';


class Movie extends Component {
  constructor() {
    super();
    this.state = { isOnWatchlist: false, movie: {}, loading: true };
  }

  componentWillMount() {
    import(`../data/${this.props.match.params.id}.json`)
      .then(movie => {
        this.duration = parseInt(movie.duration.replace(/\D/g, ''));
        this.hour = Math.floor(this.duration / 60);
        this.minute = this.duration % 60;
        this.setState({ movie: movie.default });
      });
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
            padding: '5%',
            backgroundImage: 'linear-gradient(to bottom, orange, orange 15%, white 20%)',
          }}>
          <div style={{ width: 150, height: 'auto' }}>
            <div className='parentDiv'>
              <img src={this.state.movie.posterurl} //'http://t0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD'
                style={{ width: '100%', height: 'auto' }}
                className='rounded'
                alt='poster' />
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
          <span className='top-margin' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <b style={{ width: 'min-content', textAlign: 'center', paddingRight: 5, fontSize: 18 }}>{this.state.movie.originalTitle}</b>
              <div className='rounded orange' style={{ border: '2px solid orange', padding: '0 5px', marginRight: 10, height: 'fit-content' }}>{this.state.movie.imdbRating}</div>
            </div>
            <RatingBar rating={this.state.movie.imdbRating} />
          </span>
          <div className='details' style={{ display: 'flex' }}>
            {this.state.movie.year} &middot; {(this.state.movie.genres || []).map(genre => <span key={genre} className='comma'>&nbsp;{genre}</span>)} &nbsp;&middot; {this.hour}h {this.minute}min
          </div>
          <div style={{ fontSize: 14 }}>{this.state.movie.storyline}</div>
          <hr className='top-margin' />
          <div className='top-margin' style={{ display: 'grid', gridGap: 5, fontSize: 14 }}>
            <b style={{ gridColumn: 1 }}>Director: </b>
            <span style={{ gridColumn: 2 }}>
              {(this.state.movie.directors || []).map(director => <span key={director} className="comma orange" href={'#'}>{director}</span>)}
              {(this.state.movie.directors || []).length > 2 ? `| ${(this.state.movie.directors || []).length - 2} more credits >>` : null}
            </span>
            <b style={{ gridColumn: 1 }}>Writers: </b>
            <span style={{ gridColumn: 2 }}>
              {(this.state.movie.writers || []).slice(0, 2).map(writer => <span key={writer} className="comma orange" href={'#'}>{writer}</span>)}
              {(this.state.movie.writers || []).length > 2 ? `| ${(this.state.movie.writers || []).length - 2} more credits >>` : null}
            </span>
            <b style={{ gridColumn: 1 }}>Stars: </b>
            <span style={{ gridColumn: 2 }}>
              {(this.state.movie.actors || []).slice(0, 3).map(actor => <span key={actor} className="comma orange" href={'#'}>{actor}</span>)}
              {(this.state.movie.actors || []).length > 2 ? ' | See full cast & crew >>' : null}
            </span>
          </div>
          <div className='top-margin' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={`button ${this.state.isOnWatchlist ? 'red-bg' : 'orange-bg'}`}
              onClick={() => { this.setState({ isOnWatchlist: !this.state.isOnWatchlist }) }} >{this.state.isOnWatchlist ? '-' : '+'} ADD TO WATCHLIST</div>
          </div>
        </div>
    );
  }
}

export default Movie;