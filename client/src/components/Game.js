// import * as React from 'react';
// import { useEffect, useState } from 'react';

// import { gql } from '../utils/gql';
// const images = require.context('../../public/images', true);

// const Game = (props) => {
//     const [loading, setLoading] = useState(true);
//     const [win, setWin] = useState("");
//     const [result, setResult] = useState("");
//     const [answers, setAnswers] = useState([]);
//     const [photos, setPhotos] = useState([]);

//     const getPart = async () => {
//         console.log("GET PART");
//         const r = await gql(`{
//             part(id: ${props.part_id}) {
//               id
//               win
//               lose1
//               lose2
//               lose3
//             },
//             photo(part_id: ${props.part_id}) {
//               id
//               filename
//             }
//           }`);

//         let allPics = [];
//         for (let i = 0; i < r.photo.length; i++) {
//             let myObject = {
//                 id: null,
//                 filename: null
//             }
//             const myPic = images(`./${r.photo[i].filename}.jpg`);
//             myObject.id = r.photo[i].id;
//             myObject.filename = myPic.default;
//             allPics[i] = myObject;
//         }
//         setPhotos(allPics);

//         const allAnswers = [
//             {
//                 id: 0,
//                 name: r.part.win
//             },
//             {
//                 id: 1,
//                 name: r.part.lose1
//             },
//             {
//                 id: 2,
//                 name: r.part.lose2
//             },
//             {
//                 id: 3,
//                 name: r.part.lose3
//             }
//         ];
//         const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());

//         setAnswers(shuffledAnswers);
//         setWin(r.part.win);
//         setLoading(false);
//     }

//     const handleChoice = (e) => {
//         e.preventDefault();

//         const answer = e.target.innerText;

//         if (answer === win) {
//             youWin();
//         } else {
//             youLose();
//         }
//     }

//     const youWin = () => {
//         setResult("Correct!");
//     }

//     const youLose = () => {
//         setResult("Wrong!");
//     }

//     useEffect(() => {
//         getPart();
//     }, []);

//     if (loading) return "Loading...";

//     return (
//         <>
//             {
//                 photos?.map(photo => (
//                     <img key={photo.id} src={photo.filename} alt="Part" width="500px" className="quiz-part" />
//                 ))
//             }
//             <hr></hr>
//             {
//                 answers?.map(answer => (
//                     <button key={answer.id} id={answer.id} onClick={handleChoice}>{answer.name}</button>
//                 ))
//             }
//             <p>{result}</p>
//             {/* <button onClick={props.setGameProps}>Next</button> */}

//         </>
//     )
// }

// export default Game;