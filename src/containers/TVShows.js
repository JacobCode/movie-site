import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTvShows } from '../actions/postActions';
import Divider from '@material-ui/core/Divider';
import Star from '@material-ui/icons/Star';

import '../scss/TVShows.scss';

class TVShows extends Component {
    componentWillMount() {
        this.props.getTvShows();
    }
    render() {
        const { tvShows } = this.props;
        const POSTER_URL = 'http://image.tmdb.org/t/p/w500';
        return (
            <div id="tv-shows">
                <h1>Popular TV SHOWS</h1>
                <Divider  variant="middle" />
                <div className="container">
                    {tvShows.map((show, index) => {
                        return (
                            <div className="show" key={index}>
                                <h4>{show.name}</h4>
                                <img src={`${POSTER_URL}${show.poster_path}`} />
                                <div className="info">
                                    <span className="rating">{show.vote_average} <Star /></span>
                                    <span className="air-date">{show.first_air_date.substr(0, 4)}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

TVShows.propTypes = {
    tvShows: PropTypes.array.isRequired,
    getTvShows: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tvShows: state.movies.tvShows
})

export default connect(mapStateToProps, { getTvShows })(TVShows);