import React, { Component } from 'react';
import './Home.css';
import { Link, NavLink } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Link to='/login' className="box box1">Login</Link>
                <Link to="/balance-page" className="box box2">Balance Page Example (Hooks Example)</Link>
                <NavLink to="/about" className="box box3" exact activeStyle={
                    { color: 'green' }
                }>About
                </NavLink>
                <NavLink to="/ref-example-class-component" className="box box4" exact activeStyle={
                    { color: 'green' }
                }>Ref Example with Class Component</NavLink>
                <NavLink to="/redux-example" className="box box5" exact activeStyle={
                    { color: 'green' }
                }> React-Redux Example(Age up/Down)</NavLink>
                <NavLink to="/mix" className="box box6">Mixed Concepts Example</NavLink>
                <NavLink to="/age-example" className="box box1">Age Example with Hooks</NavLink>
                <NavLink to="/income-tax-example" className="box box1">Income-tax Example</NavLink>
                <NavLink to="/async-await-fetch" className="box box1">Hooks (Async-await-Fetch API)</NavLink>
                <NavLink to="/usememo" className="box box1">Hooks (useMemo)</NavLink>

                <NavLink to="/hooks-usestate-useeffect" className="box box1">Hooks (useState, useEffect)</NavLink>
                <NavLink to="/hooks-useReducer" className="box box1">Hooks (useReducer)</NavLink>
            </div>
        );
    }
}

export default Home;