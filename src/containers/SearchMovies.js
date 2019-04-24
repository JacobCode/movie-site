import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Image
import theatre from '../images/theatre.svg';

// Material UI
import Divider from '@material-ui/core/Divider';

import { getMovie, getVideos, getImdbData, getActors, toggleMovie } from '../actions/postActions';

// SCSS
import '../scss/SearchMovies.scss';

class SearchMovies extends Component {
    constructor() {
        super();
        this.state = {}
        this.selectMovie = this.selectMovie.bind(this);
    }
    selectMovie(e) {
        this.props.getMovie(e.target.dataset.id);
        this.props.getVideos(e.target.dataset.id)
        setTimeout(() => {
            this.props.getImdbData(this.props.chosenMovie.imdb_id);
            this.props.toggleMovie(true);
            setTimeout(() => {
                this.props.getActors(Array(this.props.currentImdbData.Actors).join().split(','));
            }, 100)
        }, 500)
    }
    render() {
        const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
        const { searchOutput } = this.props
        if (this.props.searchOutput.length > 0) {
            return (
                <div id="search-results">
                    <h1>Search Results</h1>
                    <Divider variant="fullWidth" />
                    <div className="container">
                        <div className="movies">
                            {searchOutput.map((movie, index) => {
                                    return (
                                        <div key={index} className="movie">
                                            <div data-id={movie.id} onClick={this.selectMovie} style={{backgroundImage: movie.poster_path !== null ? `url('${POSTER_URL}/${movie.poster_path}')` : "url('https://happytoothnc.com/wp-content/uploads/2016/10/orionthemes-placeholder-image-1.jpg')"}} className="img">
                                            </div>
                                            <div className="info">
                                                <h2>{movie.title}</h2>
                                                <Divider variant="fullWidth" />
                                                <p>{movie.release_date.substr(0, 4)}</p>
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                        <span id="results-amount">Results: {searchOutput.length}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="no-results">
                    <h1>Start searching through thousands of movies!</h1>
                    <img src={theatre} alt="No Results" />
                </div>
            )
        }
    }
}

SearchMovies.propTypes = {
    getMovie: PropTypes.func.isRequired,
    getVideos: PropTypes.func.isRequired,
    getImdbData: PropTypes.func.isRequired,
    currentImdbData: PropTypes.object,
    chosenMovie: PropTypes.object.isRequired,
    getActors: PropTypes.func.isRequired,
    searchOutput: PropTypes.array
}

const mapStateToProps = state => ({
    chosenMovie: state.movies.chosenMovie,
    currentImdbData: state.movies.currentImdbData,
    actors: state.movies.actors,
    searchOutput: state.movies.searchOutput
})

export default connect(mapStateToProps, { getMovie, getVideos, getImdbData, getActors, toggleMovie })(SearchMovies);