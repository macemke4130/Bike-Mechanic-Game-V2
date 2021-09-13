import * as React from 'react';
import { useEffect, useState } from 'react';

import { gql } from '../utils/gql';
import Timer from '../components/Timer';
const images = require.context('../../public/images', true);

const Play = () => {
    const [loading, setLoading] = useState(true);
    const [allParts, setAllParts] = useState([]);
    const [win, setWin] = useState("");
    const [answers, setAnswers] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [index, setIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [points, setPoints] = useState(1000);
    const [resetTimer, setResetTimer] = useState(false);

    const getAllParts = async () => {
        try {
            const r = await gql(`{ allParts { id, win } }`);
            setAllParts(r.allParts);
            getPart(r.allParts[index].id);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    const getPart = async (x) => {
        try {
            const r = await gql(`{ part(id: ${x}) { id win lose1 lose2 lose3 }, photo(part_id: ${x}) { id filename }}`);

            let allPics = [];
            for (let i = 0; i < r.photo.length; i++) {
                let myObject = { id: null, filename: null }
                const myPic = images(`./${r.photo[i].filename}.jpg`);
                myObject.id = r.photo[i].id;
                myObject.filename = myPic.default;
                allPics[i] = myObject;
            }
            setPhotos(allPics);

            const allAnswers = [
                { id: 0, name: r.part.win },
                { id: 1, name: r.part.lose1 },
                { id: 2, name: r.part.lose2 },
                { id: 3, name: r.part.lose3 }
            ];
            const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());
            setAnswers(shuffledAnswers);
            setWin(r.part.win);

            if(index === 0) setIndex(1); // Fixes initial load index --

            

        } catch (e) {
            console.error("Getting Part ID: " + x + " - " + e);
        }
    }

    const startPointsTimer = () => {
        setPoints(1000);
        const interval = setInterval(() => {
            setPoints(points => points - 5);
          }, 2500);
          return () => clearInterval(interval);
    }

    const getNext = () => {
        startPointsTimer();
        setIndex(index + 1);
        const nextPartId = allParts[index].id;
        getPart(nextPartId);
    }

    const handleChoice = (e) => {
        const selected = e.target.innerText;
        if (selected === win) {
            setTotalScore(totalScore + points);
            setResetTimer(true);
            if (index === allParts.length) {
                // 100 Club Logic --
                console.log("All Questions Answered Correct!");
                return;
            }
            setPoints(1000);
            getNext();
        } else {
            // Game Over Logic --
            console.log("Loser!");
        }
    }

    const updatePoints = (pointsFromTimer) => {
       setPoints(pointsFromTimer);
       setResetTimer(false);
    }

    useEffect(() => {
        if (loading) getAllParts();
    });

    if (loading) return "Loading Play...";

    return (
        <>
        <Timer points={points} updatePoints={updatePoints} resetTimer={resetTimer} />
            {
                photos?.map(photo => (
                    <img key={photo.id} src={photo.filename} alt="Part" width="500px" className="quiz-part" />
                ))
            }
            <hr></hr>
            {
                answers?.map(answer => (
                    <button key={answer.id} onClick={handleChoice} >{answer.name}</button>
                ))
            }
            <p>{totalScore}</p>
        </>
    )
}

export default Play;