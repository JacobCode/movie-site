import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';
import { getPopularMovies, getRMovies, getVideos, getMovie, getImdbData, getActors, getImages } from '../actions/postActions';

// Components
import EmbeddedVideo from './EmbeddedVideo';

// SCSS
import '../scss/MovieInfo.scss';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MovieInfo extends Component {
    state = {
        open: this.props.isToggled,
        POSTER_URL: 'http://image.tmdb.org/t/p/w500',
        isLoading: false,
        snackbarOpen: false
    };
    getVideos = () => {
        console.log(this.props.currentVideos);
        this.setState({
            snackbarOpen: true
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                })
            }, 500)
            this.setState({
                open: this.props.isToggled,
                isLoading: true
            });
        }
    }
    handleClose = () => {
        this.setState({ open: false, isLoading: false, snackbarOpen: false });
    };
    render() {
        const { classes, chosenMovie, actors } = this.props;
        const images = actors.map((actor) => {
            return (
                <div key={actor} className="image-container">
                    <div style={{backgroundImage: `url('${actor !== null && actor.length > 0 ? this.state.POSTER_URL + actor : 'http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg'}')`}} className="actor-img"></div>
                </div>
            )
        })
        return (
            <div id="movie-info">
                <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
                id="dialog"
                >
            
                    <AppBar id="app-bar" className={classes.appBar}>
                        <Toolbar id="tool-bar">
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography component="a" href={chosenMovie.homepage} color="inherit" className={classes.flex}>
                                {/* IMDB TITLE */}
                                {this.props.currentImdbData.Title}
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div className="cover" style={{backgroundImage: `url('${this.state.POSTER_URL}/${chosenMovie.backdrop_path}')`}}></div>
                    
                    <div className="main-content">
                        <div className="content">
                            <div className="poster-container">
                                <div className="poster" style={{backgroundImage: `url('${this.state.POSTER_URL}/${chosenMovie.poster_path}')`}}>
                                    
                                </div>
                                <Button onClick={this.getVideos} variant="contained" color="secondary">Watch Trailer</Button>
                            </div>
                            <div className="movie-info">
                                <p className="runtime-date"><span>{this.props.currentImdbData.Rated}</span> &bull; {chosenMovie.runtime} min</p>
                                <p className="overview">{chosenMovie.overview}</p>
                                <p className="tagline">{chosenMovie.tagline !== undefined && chosenMovie.tagline.length > 0 ? `- ${chosenMovie.tagline}` : ''}</p>
                                <div className="info">

                                </div>
                                <div className="actors-container">
                                    <h1>Actors</h1>
                                    <div className="actors-list">
                                        <div className="actor">
                                            <div className="images">
                                                {images}
                                            </div>
                                            {/* <div className="names">
                                                {Array(this.props.currentImdbData.Actors).join().split(',').map((actor) => {
                                                    return (
                                                        <div className="name" key={actor}>
                                                            <span>{actor}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Divider variant="middle" />
                    
                    <EmbeddedVideo video={this.props.currentVideos[0]} open={this.state.snackbarOpen} />
                </Dialog>
            </div>
        );
    }
}

MovieInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    chosenMovie: PropTypes.object.isRequired,
    currentVideos: PropTypes.array.isRequired,
    currentImdbData: PropTypes.object.isRequired,
    getImages: PropTypes.func.isRequired,
    getPopularMovies: PropTypes.func.isRequired,
    getRMovies: PropTypes.func.isRequired,
    getVideos: PropTypes.func.isRequired,
    getMovie: PropTypes.func.isRequired,
    getImdbData: PropTypes.func.isRequired,
    getActors: PropTypes.func.isRequired,
    actorImages: PropTypes.string,
    actors: PropTypes.array,

    isToggled: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    chosenMovie: state.movies.chosenMovie,
    currentVideos: state.movies.currentVideos,
    currentImdbData: state.movies.currentImdbData,
    actorImages: state.movies.actorImages,
    actors: state.movies.actors,
    isToggled: state.movies.isToggled
})

export default connect(mapStateToProps, { getPopularMovies, getRMovies, getVideos, getMovie, getImdbData, getActors, getImages })(withStyles(styles)(MovieInfo));