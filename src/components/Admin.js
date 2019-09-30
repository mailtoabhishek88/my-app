import React, { Component, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BackToHome from './BackToHome';

const Admin = (props) => {

    let loggedIn = false;
    

    const [login, setLogin] = useState(loggedIn);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            loggedIn = true
        }
        setLogin(loggedIn)
    }, [])

    const handleLogOut = () => {
        props.history.push('/logout')
    }

    return (
        <div>
            {login ? <div>
                <h1> This is Admin Page. Only auth User can Access it.</h1>
                <Link to="/logout" >Logout</Link>
                <a to="/logout" onClick={handleLogOut}>Logout</a>
            </div> : null}
            <BackToHome />
        </div>
    )
}

// class Admin extends Component {

//     constructor(props){
//         super(props);
//         let loggedIn = false;
//         if(localStorage.getItem('token')){
//             loggedIn = true
//         }

//         this.state = {
//             loggedIn
//         }
//     }

//     handleLogOut =() => {
//         this.props.history.push('/logout')
//     }

//     render() {
//         if(this.state.loggedIn) {
//             return (
//                 <div>
//                     <h1> This is Admin Page. Only auth User can Access it.</h1>
//                     <Link to="/logout" >Logout</Link>
//                     <a to="/logout" onClick={this.handleLogOut}>Logout</a>
//                 </div>
//             )
//         }else {
//             return (
//                 <Redirect to="/" />
//             )
//         }
//     }
// }

export default Admin;