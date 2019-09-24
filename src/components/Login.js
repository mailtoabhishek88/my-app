import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
            fruit: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            fruit: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('token', '123456789')
            this.setState({
                loggedIn: true
            })
            this.props.history.push('/admin')
        }

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
                            <span>UserName:- </span><input type="text" name="username" value={this.state.username}
                                onChange={this.onChange} />
                            <br />
                            <span>Password:-</span><input type="password" name="password" value={this.state.password}
                                onChange={this.onChange} />
                            <br />
                            <label>
                                Pick your favorite flavor:
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </label>
                            <span> {this.state.fruit}</span>
                            <br />
                            <input type="button" onClick={this.submitForm} value="submit" />
                        </form>

                    </div>
                </>
            )
        }

    }
}

export default Login;