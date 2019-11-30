import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const AgeExample = () => {
    const age = useSelector(state => state.ageReducer.age);

    const ageUpDispatch = useDispatch();

    const onAgeUpHandle = () => {
        ageUpDispatch({
            type: "AGE_UP"
        })
    }
    
    return (
        <div>
            <h3>Age : <span> {age}</span></h3>
            <button onClick={onAgeUpHandle} >Add Age Up</button>
        </div>
    );
};

export default AgeExample;