import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToHome from './BackToHome';


function Logout() {
    // Running after Component is mounted.
    // If we passed blank [] then it worked as componentDidMount, Some times like constructor as well
    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    return (
        <div>
            <span>Successfully Logged-out!!</span>
            <div><Link to="/login" >Login-Again</Link></div>
            <BackToHome/>
        </div>
    );
}

// class Logout extends Component {
//     constructor(props){
//         super(props);
//         localStorage.removeItem('token')
//     }
//     render() {
//         return (
//             <div>
//                 <span>Successfully Logged-out!!</span>
//                 <div><Link to="/login" >Login-Again</Link></div>
//             </div>
//         );
//     }
// }

export default Logout;