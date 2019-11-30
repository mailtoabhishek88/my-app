import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToHome from './BackToHome';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

const Admin = (props) => {

    let loggedIn = false;
    let tempPlanetData = [];
    const [login, setLogin] = useState(loggedIn);
    const [planet, setPlanet] = useState([]);
    const [planetInfo, setPlanetInfo] = useState({});

    const divStyle = {
        'font-size': '10px'
      };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            loggedIn = true
            axios.get('https://swapi.co/api/planets/' )
            .then(planetData => {
                let planets = planetData.data.results;
                let sortedPlanets = planets.sort( (a, b) => {
                    if(a.population === 'unknown'){
                        a.population = 0;
                    }
                    if(b.population === 'unknown'){
                        b.population = 0;
                    }
                    return b.population-a.population
                })
                setPlanet(sortedPlanets);
                //console.log(sortedPlanets)
            })
            .catch(function (error) {
                console.log(error);
        });
        }
        setLogin(loggedIn);
        
    }, []);

    const searchPlanets = (event) => {
        if(event.target.value.length !== 0){
            let planetData =  planet.filter( item => {
                return item.name.includes(event.target.value);
            });     
            setPlanet(planetData);
        }
    }

    const showPlanetInfo = (planetName) => {
       let planetData =  planet.filter( item => {
           return item.name === planetName;
       });
       setPlanetInfo(planetData[0]);
       console.log(planetData)
    }

    const getPlanetFont = classNames({
        'color' : 'red'
    })

    return (
        <div>
            {login ? <div>
                <h1> This is Admin Page. Only auth User can Access it.</h1>
                Search for Planets : <br/>
                <input type="text" name="planet" onChange={searchPlanets}/><br/>
                
                {/* <a to="/logout" onClick={handleLogOut}>Logout</a> */}
                <br/>
                Here is Planet List : <br/>
                {
                    planet.map(item => (
                        <li key={item.name} className={getPlanetFont} onClick={() => showPlanetInfo(item.name)}>
                            {item.name} - {item.population}
                        </li>
                    ))
                }
                Planet Info : {JSON.stringify(planetInfo)}
            </div> : null}
            <Link to="/logout" >Logout</Link>
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