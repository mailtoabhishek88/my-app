import React from 'react';
import Child from './child';

const parent = (props) => {

    return (
        <div>
            <Child doWhatever={props.doWhatever} myTitle={props.title}/>
            <Child doWhatever={props.changeToOldTitle}  myTitle={props.title}/>
        </div>
        
    )
}

export default parent;