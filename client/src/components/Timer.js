import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [insidePoints, setInsidePoints] = useState(props.points);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if(props.resetTimer) setInsidePoints(500);
            setInsidePoints(insidePoints => insidePoints - 10);
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