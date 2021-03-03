import React from 'react';

function HelloWorld(props){
    return(
        <div>Hello, <strong>{props.userName}</strong>!</div>
    )
}

export default HelloWorld;