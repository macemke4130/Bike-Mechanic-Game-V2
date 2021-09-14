import * as React from 'react';
import { useEffect, useState } from 'react';

import { gql } from '../utils/gql';

const Scoreboard = () => {
    const [loading, setLoading] = useState(true);
    const [highScores, setHighscores] = useState([]);

    const getHighScores = async () => {
        const r = await gql(`{ highscores { id, name, totalscore, club100, club100num, scoredate } }`);
        setHighscores(r.highscores);
        setLoading(false);
    }

    useEffect(() => {
        if (loading) getHighScores();
    })

    if (loading) return "Loading...";

    return (
        <>
            {
                highScores?.map(score => (
                    <div key={score.id}>{score.name} - {score.totalscore}</div>
                ))
            }
        </>
    )
}

export default Scoreboard;