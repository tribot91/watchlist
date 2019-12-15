import React, { Component } from 'react';
import './Movie.scss';
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
        <div className='spinner'></div> :
        <div className='movie-bg'>
          <div className='poster'>
            <img src={this.state.movie.posterurl}
              className='rounded'
              alt='poster' />
            <div onClick={() => { this.setState({ isOnWatchlist: !this.state.isOnWatchlist }) }}
              className={`plus-btn ${this.state.isOnWatchlist ? 'red-bg' : 'orange-bg'}`}>
              {this.state.isOnWatchlist ? '-' : '+'}
            </div>
          </div>
          <span className='top-margin movie-details'>
            <div>
              <b className='movie-title'>{this.state.movie.originalTitle}</b>
              <div className='rounded imdb-rating orange'>{this.state.movie.imdbRating}</div>
            </div>
            <RatingBar rating={this.state.movie.imdbRating} />
          </span>
          <div className='movie-info'>
            {this.state.movie.year} &middot;
            <span className='genres'>
              {(this.state.movie.genres || []).map(genre => <span
                key={genre}
                className='comma'>{genre}
              </span>)}
            </span>
            &middot; {this.hour}h {this.minute}min
          </div>
          <div className='small-top-margin storyline'>{this.state.movie.storyline}</div>
          <hr className='top-margin' />
          <div className='top-margin movie-credits'>
            <b>Director: </b>
            <span className='credit-names'>
              {(this.state.movie.directors || [])
                .map(director => <span key={director} className='comma orange' href={'#'}>{director}</span>)}
              {(this.state.movie.directors || []).length > 2 ? `| ${(this.state.movie.directors || []).length - 2} more credits >>` : null}
            </span>
            <b>Writers: </b>
            <span className='credit-names'>
              {(this.state.movie.writers || []).slice(0, 2)
                .map(writer => <span key={writer} className='comma orange' href={'#'}>{writer}</span>)}
              {(this.state.movie.writers || []).length > 2 ? `| ${(this.state.movie.writers || []).length - 2} more credits >>` : null}
            </span>
            <b>Stars: </b>
            <span className='credit-names'>
              {(this.state.movie.actors || []).slice(0, 3)
                .map(actor => <span key={actor} className='comma orange' href={'#'}>{actor}</span>)}
              {(this.state.movie.actors || []).length > 2 ? ' | See full cast & crew >>' : null}
            </span>
          </div>
          <div className='top-margin btn-container'>
            <div className={`btn ${this.state.isOnWatchlist ? 'red-bg' : 'orange-bg'}`}
              onClick={() => { this.setState({ isOnWatchlist: !this.state.isOnWatchlist }) }} >
              {this.state.isOnWatchlist ? '- REMOVE FROM WATCHLIST' : '+ ADD TO WATCHLIST'}
            </div>
          </div>
        </div>
    );
  }
}

export default Movie;