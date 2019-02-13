import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layout
import Navigation from './components/Navigation';

// Components
import Discover from './containers/Discover';
import Login from './containers/Login';
import Page from './containers/Page';
import SearchMovies from './containers/SearchMovies';
import MovieInfo from './components/MovieInfo';

// Store
import store from './store';

// CSS
import './scss/App.scss';

import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import blueGrey from '@material-ui/core/colors/blueGrey';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
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
                <Route path={process.env.PUBLIC_URL + '/'} component={Discover} exact />
                <Route path={process.env.PUBLIC_URL + '/discover'} component={Discover} exact />
                <Route path={process.env.PUBLIC_URL + '/login'} component={Login} exact />
                <Route path={process.env.PUBLIC_URL + '/search'} component={SearchMovies} exact />
              </Switch>
              <MovieInfo />
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
