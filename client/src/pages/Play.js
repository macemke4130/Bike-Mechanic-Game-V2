import * as React from 'react';
import { useEffect, useState } from 'react';

import Game from '../components/Game';

import { gql } from '../utils/gql';

const Play = () => {
    const [loading, setLoading] = useState(true);
    // const [allParts, setAllParts] = useState([]);
    const [currentPart, setCurrentPart] = useState(0);

    let index = 0;
    let allParts = [];

    const getAllParts = async () => {
        try {
            const r = await gql(`{ allParts { id } }`);
            allParts = r.allParts;

            setGameProps();
        } catch (e) {
            console.log(e);
        }
    }

    const setGameProps = () => {
        console.log(currentPart);
        setCurrentPart(allParts[index].id);
        // index++;
        setLoading(false);
    }

    useEffect(() => {
        getAllParts();
    }, []);

    if (loading) return "Loading Play...";

    return (
        <Game part_id={currentPart} setGameProps={setGameProps} />
        // <Game part_id={currentPart}  />
    )
}

export default Play;