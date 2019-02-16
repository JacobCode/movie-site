import React, { Component } from 'react';

import logo from '../images/movie-db-logo.svg';
import '../scss/Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="container">
                    <div className="col info">
                        <p>All Movie and TV Show images, videos, and other data is provided by <a href="https://www.themoviedb.org/">TheMovieDB</a>.</p>
                        <img src={logo} alt="MovieDB Logo" />
                    </div>
                    <div className="col links">
                        <h6>Links</h6>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">TV Shows</a></li>
                            <li><a href="/">Discover Movies</a></li>
                            <li><a href="/">Search Movies</a></li>
                        </ul>
                    </div>
                    <div className="col contact">
                        <h6>Contact</h6>
                        <ul>
                            <li>Portfolio: <a href="https://jacobcode.github.io/portfolio/">Jacob Carver</a></li>
                            <li>GitHub: <a href="https://github.com/JacobCode">JacobCode</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;