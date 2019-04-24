import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layout
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Components
import Discover from './containers/Discover';
import Home from './containers/Home';
import TVShows from './containers/TVShows';
import SearchMovies from './containers/SearchMovies';
import MovieInfo from './components/MovieInfo';

// Store
import store from './store';

// CSS
import './scss/App.scss';

import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey,
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <Navigation />
              <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
                <Route path={process.env.PUBLIC_URL + '/discover'} component={Discover} exact />
                <Route path={process.env.PUBLIC_URL + '/tvshows'} component={TVShows} exact />
                <Route path={process.env.PUBLIC_URL + '/search'} component={SearchMovies} exact />
              </Switch>
              <Footer />
              <MovieInfo />
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
