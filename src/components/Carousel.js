import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Star from '@material-ui/icons/Star';

import { getUpcomingMovies, getMovie, getVideos, getGenres, getImdbData, getActors, toggleMovie } from '../actions/postActions';

// SCSS
import '../scss/Carousel.scss';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({});

class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            activeStep: 0,
            loading: true
        };
        this.viewMovie = this.viewMovie.bind(this);
    }
    // Handle Next
    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };
    // Handle Previous
    handleBack = () => {
        this.setState(prevState => ({
        activeStep: prevState.activeStep - 1,
        }));
    };
    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };
    componentWillMount() {
        this.props.getUpcomingMovies();
        this.props.getGenres();
    }
    // Get individual movie
    viewMovie(e) {
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
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }
    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = this.props.upcomingMovies.length;
        const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
        return (
            <div>
                {this.state.loading === false ? 
                <div id="carousel">
                    <h1>New & Upcoming Releases</h1>
                    <Divider  variant="middle" />
                    <div className={classes.root}>
                        <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        interval={10000}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                        >
                            {this.props.upcomingMovies.map((step, index) => {
                                const genreBtns = [];
                                this.props.genres.forEach((genre) => {
                                    step.genre_ids.forEach((genreID) => {
                                        if (genreID === genre.id) {
                                            genreBtns.push(genre.name);
                                        }
                                    })
                                })
                                const btnElements = genreBtns.map((btn, i) => {
                                        return (
                                            <Chip key={i} label={btn} className="genre" />
                                        )
                                    });
                                return (
                                    <div className="sliding-content" key={index}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <div className="image-container">
                                                <div data-id={step.id} onClick={this.viewMovie} className="img" style={{backgroundImage: `url('${POSTER_URL}/${step.poster_path}')`}}></div>
                                            </div>
                                        ) : null}
                                        <div className="text">
                                            <h1>{step.title} <span>{step.adult === true ? 'R' : 'PG-13'}</span></h1>
                                            <div className="info"><span className="date">{step.release_date.substr(0, 4)}</span> &bull; <span className="rating">{step.vote_average > 0 ? `${step.vote_average} / 10`: 'Not Rated'}<Star /></span></div>
                                            <p className="plot">{step.overview}</p>
                                            {/* ********** INSERT HERE ********** */}
                                            <div className="genres">
                                                {btnElements}
                                            </div>
                                            <Button data-id={step.id} data-imdb_id={step.imdb_id} onClick={this.viewMovie} variant="contained" color="secondary">
                                                <span data-id={step.id} data-imdb_id={step.imdb_id}>View More</span>
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
                        id="stepper"
                        // Next Button
                        nextButton={
                            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        }
                        // Back Button
                        backButton={
                            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Prev
                            </Button>
                        }
                        />
                    </div>
                </div> : <div className="loading-element carousel"><h1>Loading Movies</h1></div>}
            </div>
        );
    }
}

Carousel.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  getUpcomingMovies: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  getVideos: PropTypes.func.isRequired,
  upcomingMovies: PropTypes.array.isRequired,
  getImdbData: PropTypes.func.isRequired,
  currentImdbData: PropTypes.object,
  chosenMovie: PropTypes.object.isRequired,
  getActors: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  toggleMovie: PropTypes.func.isRequired,
  actors: PropTypes.array
};

const mapStateToProps = state => ({
    upcomingMovies: state.movies.upcomingMovies,
    chosenMovie: state.movies.chosenMovie,
    currentImdbData: state.movies.currentImdbData,
    genres: state.movies.genres,
    actors: state.movies.actors
})

export default connect(mapStateToProps, { getUpcomingMovies, getMovie, getVideos, getGenres, getImdbData, getActors, toggleMovie })(withStyles(styles, { withTheme: true})(Carousel));