import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Material UI
import Divider from '@material-ui/core/Divider';

// SCSS
import '../scss/MovieCategories.scss';

import { getPopularMovies, getRMovies, getFutureMovies, getKidsMovies, getVideos, getMovie, getImdbData, getActors, toggleMovie } from '../actions/postActions';

class MovieCategories extends Component {
    constructor() {
        super();
        this.selectMovie = this.selectMovie.bind(this);
    }
    componentWillMount() {
        // Get movies for movie categories
        this.props.getFutureMovies();
        this.props.getPopularMovies();
        this.props.getRMovies();
        this.props.getKidsMovies();
    }
    selectMovie(e) {
        // Get movie info
        this.props.getMovie(e.target.dataset.id);
        this.props.getVideos(e.target.dataset.id);
        setTimeout(() => {
            // IMBD Data
            this.props.getImdbData(this.props.chosenMovie.imdb_id);
            setTimeout(() => {
                this.props.getActors(Array(this.props.currentImdbData.Actors).join().split(','));
                // Open movie info
                this.props.toggleMovie(true);
            }, 250)
        }, 750)
    }
    render() {
        const POSTER_URL = 'https://image.tmdb.org/t/p/w300';
        const { futureMovies, kidsMovies, rMovies, popularMovies } = this.props;
            return (
                <div id="movie-categories">
                    {/* Popular Movies Section */}
                    <div className="section">
                        <h1>Popular Movies</h1>
                        <Divider variant="middle" />
                        <div className="movies">
                            {popularMovies.map((movie, index) => {
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
                    {/* R Movies Section */}
                    <div className="section">
                        <h1>Top Rated R Movies</h1>
                        <Divider variant="middle" />
                        <div className="movies">
                            {rMovies.map((movie, index) => {
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
                    {/* Kids Movies Section */}
                    <div className="section">
                        <h1>Top Rated Kids Movies</h1>
                        <Divider variant="middle" />
                        <div className="movies">
                            {kidsMovies.map((movie, index) => {
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
                    {/* Future Movies Section */}
                    <div className="section">
                        <h1>Future Movies</h1>
                        <Divider variant="middle" />
                        <div className="movies">
                            {futureMovies.map((movie, index) => {
                                    return (
                                        <div className="slide" key={index}>
                                            <div className="movie">
                                                <div data-id={movie.id} onClick={this.selectMovie} style={{backgroundImage: movie.poster_path !== null ? `url('${POSTER_URL}/${movie.poster_path}')` : "url('https://happytoothnc.com/wp-content/uploads/2016/10/orionthemes-placeholder-image-1.jpg')"}} className="img">

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
    getFutureMovies: PropTypes.func.isRequired,
    getKidsMovies: PropTypes.func.isRequired,
    getMovie: PropTypes.func.isRequired,
    getVideos: PropTypes.func.isRequired,
    currentVideos: PropTypes.array.isRequired,
    popularMovies: PropTypes.array.isRequired,
    futureMovies: PropTypes.array.isRequired,
    getImdbData: PropTypes.func.isRequired,
    currentImdbData: PropTypes.object.isRequired,
    chosenMovie: PropTypes.object,
    getActors: PropTypes.func.isRequired,
    actors: PropTypes.array,
    rMovies: PropTypes.array.isRequired,
    kidsMovies: PropTypes.array.isRequired,
    toggleMovie: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    popularMovies: state.movies.popularMovies,
    futureMovies: state.movies.futureMovies,
    currentVideos: state.movies.currentVideos,
    currentImdbData: state.movies.currentImdbData,
    chosenMovie: state.movies.chosenMovie,
    rMovies: state.movies.rMovies,
    kidsMovies: state.movies.kidsMovies,
    actors: state.movies.actors
})

export default connect(mapStateToProps, { getPopularMovies, getFutureMovies, getRMovies, getKidsMovies, getVideos, getMovie, getImdbData, getActors, toggleMovie })(MovieCategories);