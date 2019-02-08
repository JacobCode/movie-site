import React, { Component} from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            currentPageForm: 'Login',
            emailInput: '',
            passwordInput: ''
        }
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleEmailInput(e) {
        this.setState({
            emailInput: e.target.value
        })
    }
    handlePasswordInput(e) {
        this.setState({
            passwordInput: e.target.value
        })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.emailInput}`);
        console.log(`Password: ${this.state.passwordInput}`);
    }
    render() {
        return (
            <div>
                <Grid container>
                    <h1>Login | Sign Up</h1>
                    <p>Login to view a wide variety of movies</p>
                    <form onSubmit={this.handleFormSubmit}>
                        <TextField onChange={this.handleEmailInput} required label="Email Address" />
                        <TextField onChange={this.handlePasswordInput} required label="Password" type="password" />
                        <Button type="submit" variant="contained" color="primary">Login</Button>
                    </form>
                </Grid>
            </div>
        )
    }
}

export default Login;