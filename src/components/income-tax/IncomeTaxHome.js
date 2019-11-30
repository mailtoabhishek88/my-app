import React, { Component, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collapsible from 'react-collapsible';

let initData = {
    salary: 0,
    inTaxSlab: false,
    taxSlab: 0

}

const IncomeTaxHome = () => {


    const [data, setData] = useState(initData);
    const [defaultTaxableIncome, setDefaultTaxableIncome] = useState(0);
    const [taxableIncome, setTaxableIncome] = useState(0);
    const [taxAfterSaving, setTaxAfterSaving] = useState(0)
    const salaryRef = useRef(null);
    const ppfRef = useRef(null);
    const licRef = useRef(null)

    const salaryHandle = (e) => {
        //console.log(salaryRef.current.value)
        if (salaryRef.current.value > 1000000) {
            setData({ inTaxSlab: true, taxSlab: 30, salary: salaryRef.current.value })
        } else if (salaryRef.current.value > 500000) {
            setData({ inTaxSlab: true, taxSlab: 20, salary: salaryRef.current.value })
        } else if (salaryRef.current.value > 300000) {
            setData({ inTaxSlab: true, taxSlab: 10, salary: salaryRef.current.value })
        } else {
            setData({ inTaxSlab: false })
        }
        calculateTax();
    }

    const calculateTax = () => {
        if (data.taxSlab === 30) {
            setDefaultTaxableIncome(data.salary - 1000000)
        } else if (data.taxSlab === 20) {
            setDefaultTaxableIncome(data.salary - 500000)
        } else if (data.taxSlab === 10) {
            setDefaultTaxableIncome(data.salary - 300000)
        }
    }

    function changeTaxableIncomeAfterPPF() {
        // if ((taxableIncome - ppfRef.current.value) > 0)
        //     setTaxableIncome(taxableIncome - ppfRef.current.value)
        // else {
        //     setTaxableIncome(0)
        // }
    }

    function changeTaxableIncomeAfterLIC() {
        // if ((taxableIncome - licRef.current.value) > 0)
        //     setTaxableIncome(taxableIncome -licRef.current.value)
        // else {
        //     setTaxableIncome(0)
        // }
    }

    function calculateTaxAfterSaving() {
        setTaxAfterSaving(defaultTaxableIncome-(Number(ppfRef.current.value) + Number(licRef.current.value)))
    }

    return (
        <div>

            Income Tax Home Page !!
                {data.inTaxSlab ?
                <div className="alert alert-warning">
                    <strong>Warning!</strong>  <span>Your salary is in {data.taxSlab}% tax slab</span>
                </div> : null}
            <hr />
            Enter Annual Salary<input type="number" placeholder="Enter Your Salary"
                onBlur={salaryHandle} ref={salaryRef} />
            <hr />

            <div>
                <button onClick={calculateTax}>Calculate Taxable Income</button>
                : ------> Taxable Salary : {defaultTaxableIncome}
            </div>
            <hr />
            <div>

                <button>
                    <Collapsible trigger="My Savings">
                        <div>
                            <ul>
                                <li> PPF Account Investment : <span>
                                    <input type="number" onBlur={changeTaxableIncomeAfterPPF} ref={ppfRef} />
                                </span>
                                </li>
                                <li> LIC Investment : <span>
                                    <input type="number" onBlur={changeTaxableIncomeAfterLIC} ref={licRef} />
                                </span>
                                </li>
                            </ul>
                        </div>
                    </Collapsible>
                </button>
            </div>
            <hr/>
            <button onClick={calculateTaxAfterSaving}>Calculate Taxable Income after showing Savings : {taxAfterSaving}</button>
        </div>
    );
}

export default IncomeTaxHome;