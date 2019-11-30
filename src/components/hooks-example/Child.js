import React, {useEffect} from 'react';

let renderCount = 0;

const Child = () => {

    useEffect(() => {
        ++renderCount
    });

    return (
        <div>
            :I am Child : 
            renderCount : {renderCount}
        </div>
    );
};

export default Child;