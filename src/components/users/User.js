import React, {Component} from 'react';

const user = (props) => {

    if(props.children){
        return (
            <>
            <div>
            <span>User's Name : {props.children}| User's Age : {props.age}</span>
            <input type='text' onChange={props.changeName} />
            </div>
            <button onClick={props.deleteUser}>Delete user</button>
            
            </>
            
        )    
    }else {
        return (
       
            <div>Invalid Entry - Age not defined<button onClick={props.deleteUser}>Delete user</button></div>
            
        ) 
    }
    
}

export default user;