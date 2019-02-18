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
import { getPopularMovies, getRMovies, getVideos, getMovie, getActors } from '../actions/postActions';

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
        POSTER_URL: 'https://image.tmdb.org/t/p/w500',
        isLoading: false,
        openTrailer: false,
        openError: false
    };
    getVideos = () => {
        this.setState({
            openTrailer: true,
            openError: true
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            setTimeout(() => {
                this.setState({
                    open: this.props.isToggled,
                    isLoading: true
                });
            }, 500)
        }
        if (nextProps.currentImdbData.Title) {
            console.log(nextProps.currentImdbData)
        }
    }
    handleClose = () => {
        this.setState({ open: false, isLoading: false, openTrailer: false, openError: false });
    };
    render() {
        const { classes, chosenMovie, actors, currentImdbData } = this.props;
        // Actor images
        const images = actors.map((actor, index) => {
            return (
                <div key={index} className="image-container">
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
                                {chosenMovie.title}
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div className="cover" style={{backgroundImage: `url('${this.state.POSTER_URL}/${chosenMovie.backdrop_path}')`}}></div>
                    
                    <div className="main-content">
                        <div className="content">
                            <div className="poster-container">
                                <div className="poster" style={{backgroundImage: `url('${this.state.POSTER_URL}/${chosenMovie.poster_path}')`}}>
                                    
                                </div>
                                {/* Open embedded video */}
                                <Button onClick={this.getVideos} variant="contained" color="secondary">Watch Trailer</Button>
                            </div>
                            <div className="movie-info">
                                <p className="runtime-date"><span>{currentImdbData.Rated === 'G' ? 'G' : currentImdbData.Rated === 'R' ? 'R' : 'PG-13'}</span> &bull; {chosenMovie.runtime} min</p>
                                <p className="overview">{chosenMovie.overview}</p>
                                <p className="tagline">{chosenMovie.tagline !== undefined && chosenMovie.tagline.length > 0 ? `- ${chosenMovie.tagline}` : ''}</p>
                                <div className="info">

                                </div>
                                {/* Actors */}
                                <div className="actors-container">
                                    <h1>Actors</h1>
                                    <div className="actors-list">
                                        <div className="actor">
                                            <div className="images">
                                                {images}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Divider variant="middle" />
                    
                    <EmbeddedVideo video={this.props.currentVideos[0]} openTrailer={this.state.openTrailer} openError={this.state.openError} />
                </Dialog>
            </div>
        );
    }
}

MovieInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    chosenMovie: PropTypes.object.isRequired,
    currentVideos: PropTypes.array.isRequired,
    getPopularMovies: PropTypes.func.isRequired,
    getRMovies: PropTypes.func.isRequired,
    getVideos: PropTypes.func.isRequired,
    getMovie: PropTypes.func.isRequired,
    getActors: PropTypes.func.isRequired,
    currentImdbData: PropTypes.object.isRequired,
    actorImages: PropTypes.string,
    actors: PropTypes.array,

    isToggled: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    chosenMovie: state.movies.chosenMovie,
    currentVideos: state.movies.currentVideos,
    currentImdbData: state.movies.currentImdbData,
    actors: state.movies.actors,
    isToggled: state.movies.isToggled
})

export default connect(mapStateToProps, { getPopularMovies, getRMovies, getVideos, getMovie, getActors })(withStyles(styles)(MovieInfo));