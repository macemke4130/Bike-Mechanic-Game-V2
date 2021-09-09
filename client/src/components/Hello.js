import * as React from 'react';
import { useEffect, useState } from 'react';

import { gql } from '../utils/gql';

const Hello = () => {
    const [greeting, setGreeting] = useState("");

    const getGreeting = async () => {
        const r = await gql(`{greet}`);
        setGreeting(r.greet);
    }

    useEffect(() => {
        getGreeting();
    }, []);

    return (
        <h1>{greeting || "Loading..."}</h1>
    )
}

export default Hello;