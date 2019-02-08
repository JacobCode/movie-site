import React, { Component } from 'react';

// Components
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';
import MovieCategories from '../components/MovieCategories';

class Page extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Carousel />
                <MovieCategories />
            </div>
        )
    }
}

export default Page;