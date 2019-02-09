import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './containers/Home';
import Login from './containers/Login';
import Page from './containers/Page';
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
              <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
                <Route path={process.env.PUBLIC_URL + '/page'} component={Page} exact />
                <Route path={process.env.PUBLIC_URL + '/login'} component={Login} exact />
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
