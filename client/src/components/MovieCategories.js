import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// SCSS
import '../scss/MovieCategories.scss';

import Divider from '@material-ui/core/Divider';

import { getPopularMovies, getRMovies, getVideos, getMovie, getImdbData, getActors, toggleMovie } from '../actions/postActions';

class MovieCategories extends Component {
    constructor() {
        super();
        this.selectMovie = this.selectMovie.bind(this);
    }
    componentWillMount() {
        this.props.getPopularMovies();
        this.props.getRMovies();
    }
    selectMovie(e) {
        this.props.getMovie(e.target.dataset.id);
        this.props.getVideos(e.target.dataset.id);
        setTimeout(() => {
            this.props.getImdbData(this.props.chosenMovie.imdb_id);
            this.props.toggleMovie(true);
            setTimeout(() => {
                this.props.getActors(Array(this.props.currentImdbData.Actors).join().split(','));
            }, 100)
        }, 500)
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
                                            <div data-id={movie.id} onClick={this.selectMovie} style={{backgroundImage: `url('${POSTER_URL}/${movie.poster_path}')`}} className="img">

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
                                            <div data-id={movie.id} onClick={this.selectMovie} style={{backgroundImage: `url('${POSTER_URL}/${movie.poster_path}')`}} className="img">

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
    getVideos: PropTypes.func.isRequired,
    currentVideos: PropTypes.array.isRequired,
    popularMovies: PropTypes.array.isRequired,
    getImdbData: PropTypes.func.isRequired,
    currentImdbData: PropTypes.object.isRequired,
    chosenMovie: PropTypes.object,
    getActors: PropTypes.func.isRequired,
    actors: PropTypes.array,
    rMovies: PropTypes.array.isRequired,
    toggleMovie: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    popularMovies: state.movies.popularMovies,
    currentVideos: state.movies.currentVideos,
    currentImdbData: state.movies.currentImdbData,
    chosenMovie: state.movies.chosenMovie,
    rMovies: state.movies.rMovies,
    actors: state.movies.actors
})

export default connect(mapStateToProps, { getPopularMovies, getRMovies, getVideos, getMovie, getImdbData, getActors, toggleMovie })(MovieCategories);