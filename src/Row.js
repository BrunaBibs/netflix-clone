import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url= "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [], run once when the row loads, and don't run it again
    }, [fetchUrl]);

    console.log(movies);

    // fetchUrl is inside the snippet because the variable is outside of the box, so useEffect knows that needs to refire that url

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">

            {movies.map(movie => (

                <img
                className="row__poster"
                src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}
            </div>

        </div>
    )
}

export default Row
