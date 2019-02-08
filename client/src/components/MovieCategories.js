import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';

// SCSS
import '../scss/MovieCategories.scss';

import Divider from '@material-ui/core/Divider';

import { getPopularMovies, getRMovies, getMovie } from '../actions/postActions';

class MovieCategories extends Component {
    constructor() {
        super();
        this.getMovie = this.getMovie.bind(this);
    }
    componentWillMount() {
        this.props.getPopularMovies();
        this.props.getRMovies();
    }
    getMovie(e) {
        this.props.getMovie(e.target.dataset.id)
    }
    render() {
        const POSTER_URL = 'http://image.tmdb.org/t/p/w300';
        return (
            <div id="movie-categories">

                {/* Popular Movies Section */}

                <div className="section">
                    <h1>Popular Movies</h1>
                    <Divider variant="middle" />
                    <div className="movies">
                        {this.props.popularMovies.map((movie, index) => {
                                return (
                                    <div className="slide" key={index}>
                                        <div className="movie">
                                            <div data-id={movie.id} onClick={this.getMovie} style={{backgroundImage: `url('${POSTER_URL}/${movie.poster_path}')`}} className="img">

                                            </div>
                                            <div className="info">
                                                <h2>{movie.title}</h2>
                                                <Divider variant="middle" />
                                                <p>{movie.release_date.substr(0, 4)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                </div>

                {/* R Movie Section */}

                <div className="section">
                    <h1>Top Rated R Movies</h1>
                    <Divider variant="middle" />
                    
                    <div className="movies">
                        {this.props.rMovies.map((movie, index) => {
                                return (
                                    <div className="slide" key={index}>
                                        <div className="movie">
                                            <div data-id={movie.id} onClick={this.getMovie} style={{backgroundImage: `url('${POSTER_URL}/${movie.poster_path}')`}} className="img">

                                            </div>
                                            <div className="info">
                                                <h2>{movie.title}</h2>
                                                <Divider variant="middle" />
                                                <p>{movie.release_date.substr(0, 4)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        )
    }
}

MovieCategories.propTypes = {
    getPopularMovies: PropTypes.func.isRequired,
    getRMovies: PropTypes.func.isRequired,
    getMovie: PropTypes.func.isRequired,
    popularMovies: PropTypes.array.isRequired,
    rMovies: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    popularMovies: state.movies.popularMovies,
    rMovies: state.movies.rMovies
})

export default connect(mapStateToProps, { getPopularMovies, getRMovies, getMovie })(MovieCategories);