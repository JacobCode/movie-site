import React, { Component } from 'react';

// Components
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';
import MovieCategories from '../components/MovieCategories';


class Home extends Component {
    render() {
        return (
            <div id="home">
                <Navigation />
                <Carousel />
                <MovieCategories />
            </div>
        )
    }
}

export default Home;