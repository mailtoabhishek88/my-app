import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BackToHome from './BackToHome';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {

    constructor(props) {
        super(props);

        let token = localStorage.getItem('token');
        let loggedIn = false
        loggedIn = token ? true : false
        this.state = {
            username: '',
            password: '',
            loggedIn,
            errorMsg: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getUserProfile = (username, password) => {
        axios.get('https://swapi.co/api/people/?search=' + username)
            .then(userDetails => {
                let users = userDetails.data.results, userFound = false;
                if (users.length === 0) {
                    this.setState({
                        errorMsg: 'No users found with in Starwars World with this Name :' + username
                    });
                } else {
                    users.forEach((user, index) => {
                        if (user.name === username && user.birth_year === password) {
                            localStorage.setItem('token', '123456789')
                            this.setState({
                                loggedIn: true
                            })
                            this.props.history.push('/admin')
                            userFound = true;
                        }
                    });
                    if (!userFound) {
                        this.setState({ errorMsg: 'Something is not correct! Please check your username or password' })
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    submitForm = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        this.getUserProfile(username, password);
    }

    render() {
        if (this.state.loggedIn) {
            return (<Redirect to="/admin" />)
        } else {
            console.log('This is not auth User')
            return (
                <>
                    <div>
                        <form >
                            {this.state.errorMsg && <div class="alert alert-danger" role="alert">
                                {this.state.errorMsg}
                            </div>}
                            <span>UserName:- </span><input type="text" name="username" value={this.state.username}
                                onChange={this.onChange} />
                            <br />
                            <span>Password:-</span><input type="password" name="password" value={this.state.password}
                                onChange={this.onChange} />
                            <br />
                            <br />
                            <input type="button" onClick={this.submitForm} value="submit" />
                        </form>
                        <BackToHome />
                    </div>
                </>
            )
        }

    }
}

export default Login;