import React, { Component} from 'react';
import { Button, TextField } from '@material-ui/core';

import '../scss/Login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            nameInput: '',
            emailInput: '',
            passwordInput: '',
            page: 'Login'
        }
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleNameInput(e) {
        this.setState({
            nameInput: e.target.value
        })
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
        console.log(this.state);
    }
    render() {
        return (
            <div id="login">
                <div className="container">
                    <div className="pages">
                        <h1 className={`Signup ${this.state.page === 'Login' ? 'active' : ''}`}>Login</h1>
                        <h1 className={`Signup ${this.state.page === 'Signup' ? 'active' : ''}`}>Signup</h1>
                    </div>
                    <form onSubmit={this.handleFormSubmit}>
                        <TextField onChange={this.handleNameInput} required label="Name" />
                        <TextField onChange={this.handleEmailInput} required label="Email Address" />
                        <TextField onChange={this.handlePasswordInput} required label="Password" type="password" />
                        <Button type="submit" variant="contained" color="secondary">Login</Button>
                    </form>
                    <p>Don't have an account? <span>Create one here</span></p>
                </div>
            </div>
        )
    }
}

export default Login;