import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [], run once when the row loads, and don't run it again
    }, []);

    return (
        <div>
            <h2>{title}</h2>

        </div>
    )
}

export default Row
