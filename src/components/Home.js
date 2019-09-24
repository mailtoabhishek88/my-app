import React, { Component } from 'react';
import './Home.css';
import {Link, NavLink} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Link to='/login' className="box box1">Login</Link>
                <Link to="/balance-page" className="box box2">Balance Page Example (Hooks Example)</Link>
                <NavLink to="/about" className="box box3" exact activeStyle={
                    {color:'green'}
                }>About
                </NavLink>
                <NavLink to="/ref-example-class-component" className="box box4" exact activeStyle={
                    {color:'green'}
                    }>Ref Example with Class Component</NavLink>
                <NavLink to="/redux-example" className="box box5" exact activeStyle= {
                    {color:'green'}
                }> React-Redux Example(Age up/Down)</NavLink>
                <NavLink to="/mix" className="box box6">Mixed Concepts Example</NavLink>
            </div>
        );
    }
}

export default Home;