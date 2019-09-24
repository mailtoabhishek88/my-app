import React from 'react';

const child = (props) => {
    
    return (
        <>
            Title : {props.myTitle}
            <button onClick={props.doWhatever}>Change Title - {props.myTitle}</button>
        </>
        
    )
}

export default child;