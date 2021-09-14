import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [insidePoints, setInsidePoints] = useState(props.points);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            setInsidePoints(insidePoints => insidePoints - 10);
            if(props.resetTimer) setInsidePoints(500);
            props.updatePoints(insidePoints);
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <p>Points Remaining: {insidePoints}</p>
        
    )
}

export default Timer;