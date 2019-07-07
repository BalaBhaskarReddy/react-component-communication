import React from 'react';
import Child from './child';

//sibling communication
const parent = (props) => {
    return(
        <div>
            <Child doWhatever={props.changeTheWorld}/>
            <Child doWhatever={props.keepTheWorldSame}/>
         </div>
    )
}

export default parent;