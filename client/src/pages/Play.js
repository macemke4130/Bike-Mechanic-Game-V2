import * as React from 'react';
import { useEffect, useState } from 'react';

import Game from '../components/Game';
import PartButton from '../components/PartButton';

import { gql } from '../utils/gql';
const images = require.context('../../public/images', true);

const Play = () => {
    const [loading, setLoading] = useState(true);
    const [allParts, setAllParts] = useState([]);
    const [currentPart, setCurrentPart] = useState(null);
    const [win, setWin] = useState("");
    const [answers, setAnswers] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [index, setIndex] = useState(0);

    const getAllParts = async () => {
        try {
            const r = await gql(`{ allParts { id, win } }`);
            setAllParts(r.allParts);
            setCurrentPart(r.allParts[0].id);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    const getPart = async (x) => {
        console.log("Getting Part: " + x);
        const r = await gql(`{
            part(id: ${x}) {
              id
              win
              lose1
              lose2
              lose3
            },
            photo(part_id: ${x}) {
              id
              filename
            }
          }`);
        console.log(r.part.win);

        // let allPics = [];
        // for (let i = 0; i < r.photo.length; i++) {
        //     let myObject = {
        //         id: null,
        //         filename: null
        //     }
        //     const myPic = images(`./${r.photo[i].filename}.jpg`);
        //     myObject.id = r.photo[i].id;
        //     myObject.filename = myPic.default;
        //     allPics[i] = myObject;
        // }
        // setPhotos(allPics);

        const allAnswers = [
            {
                id: 0,
                name: r.part.win
            },
            {
                id: 1,
                name: r.part.lose1
            },
            {
                id: 2,
                name: r.part.lose2
            },
            {
                id: 3,
                name: r.part.lose3
            }
        ];
        const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());
        setAnswers(shuffledAnswers);
        setWin(r.part.win);
    }

    const getNext = () => {
        setIndex(index + 1);
        console.log("Index: " + index);
        const nextPartId = allParts[index].id;
        getPart(nextPartId);
    }

    const handleClick = (e) => {
        console.log(e.target.innerText);
    }

    useEffect(() => {
        getAllParts();
    }, []);

    if (loading) return "Loading Play...";

    return (
        <>
            {/* Should the components be <images> <answers> and <feedback>? That may be easier.
            Should I do all fetch requests in this page component? */}
            {
                answers?.map(answer => (
                    <button key={answer.id} id={answer.id} >{answer.name}</button>
                ))
            }
            {/* <Game part_id={currentPart} setGameProps={setGameProps} /> */}
            <button onClick={getNext}>Next</button>
        </>
    )
}

export default Play;