import React, { useEffect, useState } from 'react';
import { breakingApi } from '../api/brakingApi';

export function AuthorsContainer(nombre) {

const [quotes, setQuotes] = useState();

useEffect(() => {
    getQuotes();
}, [])

const strname = JSON.stringify(nombre);
const nameArr = strname.split('\"');
const name = nameArr[3];
const nameURl =name.replace(' ', '+');

const getQuotes = async() => {
    const resp = await breakingApi.get(`/quote?author=${nameURl}`)
    setQuotes(resp.data);
}


    return (
        <>
            <ul>
                { !quotes ? 'Loading ...'
                : quotes.map((quotes) =>{
                return (
                        <>
                            <li key={quotes.quote_id}>
                                <input type="checkbox" />
                                {quotes.quote}
                            </li>
                        </>
                    );
                })}
            </ul>
        </>
    )
}

