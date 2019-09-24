import React, {Component} from 'react';
import User from './User';

class Users extends Component {
    state = {
        users : [
            {id:"11",name : 'Jack', age:20},
            
            {id:"22",name : 'Jill', age:21},
            {id:"33",name : 'Peter', age:30}
        ]
    }

    deleteUser =( index,e) => {
        const tempUsers = Object.assign([], this.state.users);
        tempUsers.splice(index,1);
        this.setState({
            users: tempUsers
        })
    }

    changeUserName =( id,e) => {
        const tempUsers = Object.assign([], this.state.users);
        const index = tempUsers.findIndex((user) => {
            return user.id === id
        });

        const editedUser = tempUsers[index];

        editedUser.name = e.target.value;

        tempUsers[index] = editedUser;
        this.setState({
            users: tempUsers
        })
    }


    render(){
        return (
            <>
            <h2 >User Profile Card</h2>

            {/* <div className="card">
            <img src={logo1} alt="John" />
            <h1>John Doe</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <div >
                <a href="#"><i className="fa fa-dribbble"></i></a> 
                <a href="#"><i className="fa fa-twitter"></i></a>  
                <a href="#"><i className="fa fa-linkedin"></i></a>  
                <a href="#"><i className="fa fa-facebook"></i></a> 
            </div>
            <p><button>Contact</button></p>
            </div> */}

            <button onClick={this.makeYounger}>Make me 10 Years Younger</button>
            <div>
                {this.state.users.map((user, index) => {
                    return <User age={user.age} 
                    deleteUser={() => this.deleteUser(index)}
                    changeName={(e) => this.changeUserName(user.id,e)}
                    key={user.id}>{user.name}</User>
                })}
                {/* <User age='20'></User>
                <User age='20'>Jack</User>
                <User age='21'>Jill </User>
                <User age='31'>Peter</User> */}
            </div>
            </>
        )
    }

}

export default Users;