import * as React from 'react';
import { useEffect, useState } from 'react';

import { gql } from '../utils/gql';

const images = require.context('../../public/images', true);

const Hello = () => {
    const [win, setWin] = useState("");
    const [photo, setPhoto] = useState([]);

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
              id
              filename
            }
          }`);

        let allPics = [];
        for (let i = 0; i < r.photo.length; i++) {
            let myObject = {
                id: null,
                filename: null
            }
            const myPic = images(`./${r.photo[i].filename}.jpg`);
            myObject.id = r.photo[i].id;
            myObject.filename = myPic.default;
            allPics[i] = myObject;
        }
        setPhoto(allPics);
        setWin(r.part.win);

    }

    useEffect(() => {
        getPart();
    }, []);

    return (
        <>
            <h1>{win || "Loading..."}</h1>
            {
                photo?.map(pic => (
                    <img key={pic.id} src={pic.filename} alt="Part" width="500px" />
                ))
            }

        </>
    )
}

export default Hello;