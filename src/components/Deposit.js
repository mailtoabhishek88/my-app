import React, { Component } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'

const Deposit =  () => {
    const balance = useSelector(state => state.balanceReducer.balance);

    const dispatch = useDispatch();

    const onDepositHandle = () => {
        dispatch({type : "DEPOSIT", payload:10});
    }   
        return (
            <div>

               Deposit Page 
               <h1> Balance : {balance}</h1>
               <button onClick={onDepositHandle}>Deposit $10</button>
               <div>Want to withdraw ?? 
                    <Link to='/withdraw'>withdraw</Link>
                    
                </div>
                <div>Want to Home Page 
                    <Link to='/balance-page'>Balance Home Page</Link>
                    
                </div>
            </div>
        );
}

export default Deposit;