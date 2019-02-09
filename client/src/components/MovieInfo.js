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
        actors: this.props.actors,
        POSTER_URL: 'http://image.tmdb.org/t/p/w500'
    };
    getVideos = () => {
        console.log('GET VIDEOS');
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                open: this.props.isToggled
            });
        }
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { classes, chosenMovie, actors } = this.props;
        if (this.props.isToggled === true) {
            console.log('OPEN')
            console.log(this.props.currentImdbData);
        }
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
                                <p className="runtime-date">{chosenMovie.runtime} min &bull; {String(chosenMovie.release_date).substr(0, 4)}</p>
                                <p className="overview">{chosenMovie.overview}</p>
                                <p className="tagline">- {chosenMovie.tagline}</p>
                                <div className="info">

                                </div>
                                <div className="actors-container">
                                    <h1>Actors</h1>
                                    <div className="actors-list">
                                        {Array(this.props.currentImdbData.Actors).join().split(',').map((actor) => {
                                            return (
                                                <div className="actor" key={actor}>
                                                    {actors.forEach((actor) => {
                                                        {/* console.log(actor); */}
                                                        return (
                                                            <div className="actor-img">qjhsdvqowhv1owhvbqowvhb</div>
                                                        )
                                                    })}
                                                    <span>{actor}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Divider variant="middle" />

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