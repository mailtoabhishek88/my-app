import React, { Component, useSelector } from 'react';
import { useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'

function Withdraw (){
    const balance = useSelector(state => state.balanceReducer.balance);

    const dispatchWithdraw = useDispatch();

    const withdrawHandle = () => {
        dispatchWithdraw({type:"WITHDRAW", payload:10})
    }
        return (
            <div>
                Withdraw Page! 
                Balance : {balance}
                <div>
                    <button onClick={withdrawHandle}>Withdraw $10</button>
                </div>
                <div>Want to Deposit ?? 
                    <Link to='/deposit'>Deposit</Link>
                    
                </div>
                <div>Want to Home Page 
                    <Link to='/balance-page'>Balance Home Page</Link>
                    
                </div>
            </div>
        );
}

export default Withdraw;