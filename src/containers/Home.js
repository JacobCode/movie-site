import React, { Component } from 'react';

import '../scss/Home.scss';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="container main">
                    <a href="/tvshows" className="tv">
                        <div></div>
                        <span>TV Shows</span>
                    </a>
                    <a href="/discover" className="movies">
                        <div></div>
                        <span>Movies</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Home;