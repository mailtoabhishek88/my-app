import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import BackToHome from './BackToHome';

function BalanceHomePage() {

    const balance = useSelector(state => state.balanceReducer.balance);
    const loanRequired = useSelector(state => state.loanReducer.loanRequired)
    const dispatchLoanEvent = useDispatch();

    const handleLoan = () => {
        dispatchLoanEvent({ type: "APPLY" })
    }

    return (
        <div>
            Balance Page !!

                Current Balance : {balance}
            <div>Want to Deposit ??
                    <Link to='/deposit'>Deposit</Link>

            </div>
            <div>Want to withdraw ??
                    <Link to='/withdraw'>Withdraw</Link>

            </div>
            <div>
                <span> {!loanRequired ? 'Loan Required' : 'Not Required'}</span>
                <button onClick={handleLoan}>{!loanRequired ? 'Apply for Loan ?' : 'Applied'} </button>
            </div>
            <BackToHome />
        </div>
    );
}

export default BalanceHomePage;