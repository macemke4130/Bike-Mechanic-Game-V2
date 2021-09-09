import * as React from 'react';
import { useEffect, useState } from 'react';

import { gql } from '../utils/gql';

const images = require.context('../../public/images', true);

const Hello = () => {
    const [win, setWin] = useState("");
    const [photo, setPhoto] = useState("");

    const getPart = async () => {
        const r = await gql(`{
            part(id: 1) {
              id
              win
              lose1
              lose2
              lose3
            },
            photo(part_id: 1) {
              filename
            }
          }`);
        setWin(r.part.win);
          
        const myPic = images(`./${r.photo.filename}.jpg`);
        setPhoto(myPic.default);

        
    }

    useEffect(() => {
        getPart();
    }, []);

    return (
        <>
            <h1>{win || "Loading..."}</h1>
            <img src={photo} alt="Part" width="500px" />
        </>
    )
}

export default Hello;