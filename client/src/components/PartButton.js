import * as React from 'react';

const PartButton = (props) => {
    return (
        <button onClick={props.handleClick}>{props.name}</button>
    )
}

export default PartButton;