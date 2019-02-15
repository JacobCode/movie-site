import React, { Component } from 'react';

// Components
import Carousel from '../components/Carousel';
import MovieCategories from '../components/MovieCategories';


class Discover extends Component {
    render() {
        return (
            <div id="Discover">
                <Carousel />
                <MovieCategories />
            </div>
        )
    }
}

export default Discover;