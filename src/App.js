import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users';
import Child from './components/parentToChild/child';
import Parent from './components/parentToChild/parent';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';
import RefExampleClassComponent from './components/ref-example/RefExampleClassComponent';
import PropTypes from 'prop-types';
import AgeChecker from './components/AgeChecker';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import BalanceHomePage from './components/BalanceHomePage';
import Home from './components/Home';
import AgeExample from './components/AgeExample';
import IncomeTaxHome from './components/income-tax/IncomeTaxHome';
import GrowthWithHooks from './components/hooks-example/GrowthWithHooks';
import FetchExample from './components/hooks-example/FetchExample';
import UseMemoExample from './components/hooks-example/UseMemoExample';
// import AddAB from './components/AddAB';

const Test = (props) =>{
  return ( 
  <>
  <h1> Test{props.name}</h1>
  <h1> {props.children}</h1>
  </>
  )
}

Test.propTypes = {
  name:PropTypes.string,
  children: PropTypes.element
}

const ShowUser1 = ({match}) => {
  return (
    <div>
      UserName : {match.params.username}
    </div>
  )
}

const ShowUser2 = (props) => {
  return (
    <div>
      UserName : {props.userName}
    </div>
  )
}
class App extends React.Component {
  state = {
    name : 'Techsith',
    title : 'Default title',innerWidth : 0,
    loggedIn : false
  }

  constructor(){
    super()
    console.log('constructor')
  }

  loginHandle = (status) =>{
    this.setState({
      loggedIn : status
    })
  }

  componentWillMount(){
    console.log(window.innerWidth)
    // setInterval(() => {
    //   if(window.innerWidth < 1000){
    //     this.setState({ innerWidth : window.innerWidth})
    //   }else{
    //     this.setState({ innerWidth : 'Bigger than 700'})
    //   }
    // },1000)
    
    console.log('componentWillMount')
  }

  componentDidMount(){

    console.log('componentDidMount')
  }

  changeName = (newName) =>{
    this.setState({
      name : newName
    })
  }

  changeNameFromInput =( event) => {
    this.setState({
      name : event.target.value
    })
  }

  changeTitle =(newTitle) => {
    this.setState({
      title : newTitle
    })
  }

  render(){
    console.log('render')
    return (
      <div className="App">
        {/* <Router> */}
          {/* <ul>
            <li>
              <NavLink to="/" exact activeStyle={
                {color:'green'}
              }>Login</NavLink>
            </li>
            <li>
              <NavLink to="/about"  exact activeStyle={
                {color:'green'}
              }>About</NavLink>
            </li>
            <li>
              <NavLink to="/user/Peter"  exact activeStyle={
                {color:'green'}
              }>Welcome User Peter</NavLink>
            </li>
            <li>
              <NavLink to="/user2/John"  exact activeStyle={
                {color:'green'}
              }>Welcome User John</NavLink>
            </li>
            <li>
              <NavLink to="/ref-example-class-component"  exact activeStyle={
                {color:'green'}
              }>Ref Example with Class Component</NavLink>
            </li>
            <li>
              <NavLink to="/redux-example" exact activeStyle= {
                {color:'green'}
              }> React-Redux Example(Age up/Down)</NavLink>
            </li>
          </ul> */}
          <Route path="/" exact strict component={Home} />
          <Route path="/login" exact strict component={Login} />
          <Route path="/admin" exact strict component={Admin} />
          <Route path="/logout" exact strict component={Logout} />
          <Route path="/withdraw" exact strict component={Withdraw} />
          <Route path="/balance-page" exact strict component={BalanceHomePage} />
          <Route path="/deposit" exact strict component={Deposit} />
          <Route path="/age-example" exact strict component={AgeExample} />
          <Route path="/income-tax-example" exact strict component={IncomeTaxHome} />
          <Route path="/hooks-usestate-useeffect" exact strict component={GrowthWithHooks} />
          <Route path="/async-await-fetch" exact strict component={FetchExample} />
          <Route path="/usememo" exact strict component={UseMemoExample} />
              
          <Route path="/mix" exact strict render={() => {
            if(this.state.loggedIn){
              return (
              
                <div> Welcome Home 
                  <button onClick={() => {this.loginHandle(false)}}>Log-Out</button>&nbsp;
                  <button onClick={() => this.changeName('Awesome Techsith')}>Change Bold Title</button>
                  <input type="text" placeholder="Change name editing this" 
                  onChange={this.changeNameFromInput} value={this.state.name}></input>
                  <h1>{this.state.name} | innerWidth - {this.state.innerWidth}</h1>
                  <Parent doWhatever={() => this.changeTitle('Change title')} 
                    changeToOldTitle={() => this.changeTitle('Default title')}
                  title={this.state.title} />
          
                  <Test name="abhishek" > <span> Children</span> </Test>
                  <Users />
                </div>
              )
            } else {
              return ( <div>Login first : <button onClick={() => {this.loginHandle(true)}}>Log-In</button></div>)
            }
            
          }} />

          <Route path="/about" exact strict render={() => {
            return (
              <div> welcome about</div>
            )
          }} />

          <Route path="/user/:username" exact strict render={({match}) => {
            return (
              this.state.loggedIn ? 
              <ShowUser2 userName={match.params.username}/> : <Redirect to='/' />
            )
          }} />
          <Route path="/user2/:username" exact strict render={ShowUser1} />
          <Route path='/ref-example-class-component' exact strict render={() => {
            return (
              <RefExampleClassComponent />
            )
          }} />
          <Route path='/redux-example' exact strict render={() => {
            return (
              <AgeChecker />
            )
          }} />
        {/* </Router> */}
        
      </div>
    );
  }
  
}

export default App;
