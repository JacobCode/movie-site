import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import { withRouter } from 'react-router-dom';

import { searchMovies } from '../actions/postActions';

// SCSS
import '../scss/Navigation.scss';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            left: false,
            searchInputValue: ''
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    handleSearchChange(e) {
        this.setState({
            searchInputValue: e.target.value
        })
    }
    handleSearch(e) {
        console.log(this.state.searchInputValue)
        e.preventDefault();
        // Make sure user entered query
        if (this.state.searchInputValue.length > 0) {
            this.props.searchMovies(this.state.searchInputValue);
            this.props.history.push('/search');
        }
    }
    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                
                <List>
                    <ListItem button component="a" href="/">
                            <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component="a" href="/login">
                            <ListItemText primary="Login / Sign Up" />
                    </ListItem>
                    <ListItem button component="a" href="/discover">
                            <ListItemText primary="Discover Movies" />
                    </ListItem>
                    <ListItem button component="a" href="/search">
                            <ListItemText primary="Search Movies" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemText primary={<div id="closeNav">Close<CloseIcon /></div>} />
                    </ListItem>
                </List>
            </div>
        );
        return (
            <div id="navigation">
                {/* Appbar */}
                <AppBar color="primary" className="appbar" position="static">
                    <Toolbar className="toolbar">
                        {/* Left Menu Icon */}
                        <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        {/* Right Menu Search */}
                        <form onSubmit={this.handleSearch} className="search">
                            <InputBase onChange={this.handleSearchChange} placeholder="Search Movies" required />
                            <SearchIcon onClick={this.handleSearch} />
                        </form>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                    {sideList}
                </div>
                </Drawer>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    searchMovies: PropTypes.func.isRequired,
    searchOutput: PropTypes.array
};

const mapStateToProps = state => ({
    searchOutput: state.movies.searchOutput
})

export default connect(mapStateToProps, { searchMovies })(withRouter((withStyles(styles)(Navigation))));