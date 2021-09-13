import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [inpoints, setInpoints] = useState(props.points);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if(props.resetTimer) setInpoints(1000);
            setInpoints(inpoints => inpoints - 5);
            props.updatePoints(inpoints);
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <p>Points Remaining: {inpoints}</p>
        
    )
}

export default Timer;